<?php
include './dbconnect.php';

if (isset($_POST['name'])) {

    $name = $_POST['name'];
    $review = $_POST['review'];
    $enjoyable_rating = $_POST['enjoyable-rating'];
    $intresting_rating = $_POST['intresting-rating'];


    // Insert
    $sql = "INSERT INTO review (name,review,enjoyable_rating,intresting_rating) VALUES('$name','$review','$enjoyable_rating','$intresting_rating')";

    // Success
    if ($conn->query($sql) === true) : ?>

        <div class="container my-6">
            <div class="alert alert-primary" role="alert">
                Review Sucessfully Added.
            </div>
        </div>
        <?php
        header("Location: ../reviews.php");
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