<?php
session_start();
if (isset($_SESSION['uniqueID']) && isset($_SESSION['player1_name']) && isset($_SESSION['player2_name'])
    && isset($_SESSION['player3_name']) && isset($_SESSION['player4_name'])) {
    // unset session variables
    session_unset();
    // destroy the session
    session_destroy();

    return 'SUCCESS';
}
?>
