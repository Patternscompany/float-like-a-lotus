<?php
// Set CORS headers so submissions can come from local development or live domains
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $recipient = "floatlikealotusshilpa@gmail.com";
  $action = isset($_POST['action']) ? trim($_POST['action']) : '';

  if ($action === 'subscribe') {
    $email = filter_var($_POST["email"] ?? '', FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo 'error';
      exit;
    }

    $subject = "New Newsletter Subscription | Float Like A Lotus";
    $headers  = "From: Float Like A Lotus <noreply@floatlikealotus.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $messageBody = "
      <h2>New Newsletter Subscription</h2>
      <p>A new visitor has subscribed to the Float Like A Lotus newsletter.</p>
      <p><strong>Subscriber Email:</strong> " . htmlspecialchars($email) . "</p>
      <p><em>Submitted on: " . date("F j, Y, g:i a") . "</em></p>
    ";

    echo mail($recipient, $subject, $messageBody, $headers) ? 'success' : 'error';
  } else {
    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email   = filter_var($_POST["email"] ?? '', FILTER_SANITIZE_EMAIL);
    $phone   = htmlspecialchars(trim($_POST["phone"] ?? ''));
    $date    = htmlspecialchars(trim($_POST["date"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    $subject = "New Consultation Inquiry | Float Like A Lotus" . ($name ? " - $name" : "");
    $headers  = "From: Float Like A Lotus <noreply@floatlikealotus.com>\r\n";
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $headers .= "Reply-To: $email\r\n";
    }
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $messageBody = "
      <h2>New Consultation Inquiry</h2>
      <p>You have received a new consultation request from the Float Like A Lotus website.</p>
      <table cellpadding='8' cellspacing='0' style='border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;'>
        <tr style='background:#f4f4f4;'><td style='border:1px solid #ddd;font-weight:bold;width:30%;'>Name:</td><td style='border:1px solid #ddd;'>" . ($name ?: 'Not provided') . "</td></tr>
        <tr><td style='border:1px solid #ddd;font-weight:bold;'>Email:</td><td style='border:1px solid #ddd;'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td></tr>
        <tr style='background:#f4f4f4;'><td style='border:1px solid #ddd;font-weight:bold;'>Phone:</td><td style='border:1px solid #ddd;'><a href='tel:" . htmlspecialchars($phone) . "'>" . ($phone ?: 'Not provided') . "</a></td></tr>";

    if (!empty($date)) {
      $messageBody .= "<tr><td style='border:1px solid #ddd;font-weight:bold;'>Preferred Date:</td><td style='border:1px solid #ddd;'>" . $date . "</td></tr>";
    }

    $messageBody .= "
        <tr style='background:#f4f4f4;'><td style='border:1px solid #ddd;font-weight:bold;'>Message:</td><td style='border:1px solid #ddd;'>" . nl2br($message ?: 'No message entered') . "</td></tr>
      </table>
      <p style='margin-top:20px;font-size:12px;color:#777;'>Submitted from Float Like A Lotus website on " . date("F j, Y, g:i a") . "</p>
    ";

    echo mail($recipient, $subject, $messageBody, $headers) ? 'success' : 'error';
  }
}
?>
