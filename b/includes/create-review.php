<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


include './dbconnect.php';

if (isset($_POST['name'])) {

    $name = $_POST['name'];
    $review = $_POST['review'];
    $enjoyable_rating = $_POST['enjoyable-rating'];
    $intresting_rating = $_POST['intresting-rating'];


    // Insert
    $sql = "INSERT INTO review (name,review,enjoyable_rating,intresting_rating,from_page) VALUES('$name','$review','$enjoyable_rating','$intresting_rating','negative')";

    // Success
    if ($conn->query($sql) === true) : ?>

        <div class="container my-6">
            <div class="alert alert-primary" role="alert">
                Review Sucessfully Added.
            </div>
        </div>
        <?php
        header("Location: ../thankyou.php");
        die();
    endif;
    // No success
} else {

    ?>
    <div class="container my-6">
        <div class="alert alert-danger" role="alert">
            <?php echo "Error: " . $sql . "<br>" . $conn->error;
            ?>
        </div>
    </div>

<?php
}
$conn->close();

?>