<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid JSON body']);
  exit;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Name, email, and message are required.']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Please enter a valid email address.']);
  exit;
}

$dir = __DIR__ . '/data';
if (!is_dir($dir)) {
  mkdir($dir, 0755, true);
}

$file = $dir . '/submissions.json';
$entries = [];
if (is_file($file)) {
  $existing = json_decode((string)file_get_contents($file), true);
  if (is_array($existing)) {
    $entries = $existing;
  }
}

$id = uniqid('contact_', true);
$entries[] = [
  'id' => $id,
  'name' => $name,
  'email' => $email,
  'phone' => $phone !== '' ? $phone : null,
  'message' => $message,
  'createdAt' => date('c'),
];

file_put_contents(
  $file,
  json_encode($entries, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE),
  LOCK_EX
);

http_response_code(201);
echo json_encode(['ok' => true, 'id' => $id]);
