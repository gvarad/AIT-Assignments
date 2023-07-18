<?php
// Set cookie
setcookie('sessionId', '123456', time() + 3600, '/');
echo 'Cookie set successfully!';

// Get cookie
$sessionId = $_COOKIE['sessionId'];
echo 'Session ID: ' . $sessionId;
?>
