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

<body>
    <div>
        <!-- Get Reviews -->
        <?php
        include 'includes/dbconnect.php';
        

        // Only Negative
        $sql = "SELECT * FROM review WHERE intresting_rating < 3 AND enjoyable_rating < 3 AND from_page = 'static' ORDER BY created_at DESC;";


        $result = $conn->query($sql);
        if ($result->num_rows > 0) : ?>
            <div class="ratings-reviews-container">
                <h2>Ratings and Reviews</h2>
                <div class="ratings-reviews">
                    <?php while ($row = $result->fetch_assoc()) : ?>
                        <div class="row mb-4">
                            <div class="col">
                                <h2><?php echo $row['name']; ?></h2>
                                <small>Reviewed: <?php echo date('d F, Y', strtotime($row['created_at'])); ?></small>
                            </div>
                            <div class="col">
                                <div class="d-flex">
                                    <p>Intresting</p>
                                    <?php $intresting_rating = $row['intresting_rating']; ?>
                                    <div class="ml-3">
                                        <div>
                                            <?php for ($i = 0; $i < $intresting_rating; $i++) : ?>
                                                <i class="fas fa-star active-star"></i>
                                            <?php endfor; ?>
                                        </div>
                                        <div class="ml-2">
                                            <?php echo $intresting_rating; ?> / 5
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <p>Enjoyable</p>
                                    <?php $enjoyable_rating = $row['enjoyable_rating']; ?>
                                    <div class="ml-3">
                                        <div>
                                            <?php for ($i = 0; $i < $enjoyable_rating; $i++) : ?>
                                                <i class="fas fa-star active-star"></i>
                                            <?php endfor; ?>
                                        </div>
                                        <div class="ml-2">
                                            <?php echo $enjoyable_rating; ?> / 5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="comments bg-primary text-white p-3">
                                    <p><?php echo $row['review']; ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>

                </div>
            </div>
        <?php endif; ?>
        <?php $conn->close(); ?>
        <form method="POST" action="./includes/create-review.php">
            <div class="review-enter-container">
                <div class="row">
                    <div class="col">
                        <div>
                            <h2>Your Name *</h2>
                            <input type="text" name="name" class="form-control">
                        </div>
                        <div class="mt-4">
                            <div class="intresting">
                                <p>How intresting do you find this game?</p>
                                <div class="rating">
                                    <label>
                                        <input type="radio" name="intresting-rating" value="1" />
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="intresting-rating" value="2" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="intresting-rating" value="3" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="intresting-rating" value="4" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="intresting-rating" value="5" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                </div>
                            </div>
                            <div class="enjoyable">
                                <p>How enjoyable do you find this game?</p>
                                <div class="rating">
                                    <label>
                                        <input type="radio" name="enjoyable-rating" value="1" />
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="enjoyable-rating" value="2" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="enjoyable-rating" value="3" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="enjoyable-rating" value="4" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="enjoyable-rating" value="5" />
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                        <span class="icon">★</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h2>Your Review *</h2>
                        <textarea name="review" id="" class="form-control" rows="10" required>

                        </textarea>
                        <div class="mt-4">
                            <input type="submit" class="btn btn-primary" value="Submit">
                        </div>
                    </div>
                </div>

        </form>


    </div>
    </div>
</body>


</html>