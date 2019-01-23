<?php

    if (isset($_POST['submit'])) {

        $rantname = $_POST['rantname'];

        $rantsubject = $_POST['rantsubject'];

        $rantmailFrom = $_POST['rantmail'];

        $rantmessage = $_POST['rantmessage'];

        $mailTo = "dobriasha.usa@brain-fucker.com";

        $headers = "From: ".$mailFrom;

        $ranttxt = "You received a rant from ".$rantname.".\n\n".$rantmessage;

        mail($mailTo, $rantsubject, $ranttxt, $headers);

        header("Location: index.html?mailsend");

    }

    if (isset($_POST['submit'])) {

        $name = $_POST['name'];

        $subject = $_POST['subject'];

        $mailFrom = $_POST['mail'];

        $message = $_POST['message'];

        $mailTo = "dobriasha.usa@brain-fucker.com";

        $headers = "From: ".$mailFrom;

        $txt = "You received an e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);

        header("Location: index.html?mailsend");

    }

?>