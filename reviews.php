<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/favicon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Reviews</title>
</head>

<?php

// Connection
include 'includes/dbconnect.php';

if (!empty($_POST['name'])) {

    $name = $_POST['name'];
    $review = $_POST['review'];
    $rating = $_POST['rating'];

    // Insert
    $sql = "INSERT INTO review (name,review,rating) VALUES('$name','$review','$rating')";

    // Success
    if ($conn->query($sql) === true) { ?>

        <div class="container my-6">
            <div class="alert alert-primary" role="alert">
                Review Sucessfully Added.
            </div>
        </div>
    <?php
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
}

?>


<body>
    <div class="container py-4">

        <!-- Add Review -->
        <div class="card mb-4 p-4">
            <h2>Post Your Review</h2>
            <form action="" method="POST">

                <div class="row mt-5">
                    <div class="col">
                        <div>
                            <label for="name">Your Name*</label>
                            <input type="text" id="name" name="name" required class="form-control">
                        </div>
                        <div class="mt-4">
                            <label>How much do you like this game?</label>
                            <select class="custom-select" name="rating" id="">
                                <option value="1">1 - Very Bad</option>
                                <option value="2">2 - Bad</option>
                                <option value="3">3 - Okay</option>
                                <option value="4">4 - Good</option>
                                <option value="5">5 - Loved It!</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <label for="review">Your Review</label>
                        <textarea id="review" required name="review" class="form-control"></textarea>
                    </div>
                </div>
                <div class="mt-5">
                    <input type="submit" class="btn btn-primary" value="Submit Review">
                </div>
            </form>

        </div>

        <!-- Get Reviews -->
        <?php

        $sql = "SELECT * FROM review";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) :
            ?>
            <div class="mt-4">
                <h2>Reviews</h2>
                <div class="reviews">
                    <?php while ($row = $result->fetch_assoc()) : ?>
                        <div class="card p-4 mt-4">
                            <div>
                                <div>
                                    <h4><?php echo $row['name'] ?></h4>
                                    <div class="flex" id="rating" data-rating="<?php echo $row['rating']; ?>">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <p class="mt-4"><b>Reviewed</b>: <?php echo $row['created_at']; ?></p>
                                <p><b>Review:</b></p>
                                <div class="card p-4 bg-primary text-white">
                                    <?php echo $row['review']; ?>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </div>

        <?php endif; ?>

    </div>
    <script>
        const ratingDivs = document.querySelectorAll('#rating');

        ratingDivs.forEach(function(ratingDiv) {
            // Get each rating
            let rating = ratingDiv.dataset.rating;

            // All Stars within the div
            let stars = ratingDiv.querySelectorAll('.fas');

            // Add active-star class to the obtained rating number of stars
            for (let i = 0; i < rating; i++) {
                addActiveClassToStar(stars[i]);
            }

        });


        function addActiveClassToStar(starElement) {
            return starElement.className += " active-star";
        }
    </script>
</body>

</html>