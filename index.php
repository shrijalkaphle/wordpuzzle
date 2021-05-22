<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="assets/favicon.jpg" type="image/x-icon">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Word Search</title>
</head>
<body>
    <div class="container">
        <div id="rules" >
            <center>
                <h2>Instructions to participants</h2>
            </center>
            <ul>
                <li>This </li>
                <li>contains </li>
                <li>set </li>
                <li>of </li>
                <li>rules</li>
            </ul>
            <center>
                <button class="btn btn-primary" id="start" style="width:250px">Continue <i class="fas fa-angle-double-right"></i></button>
            </center>
        </div>
        <div id="puzzle-1" class="hidden">
            <div class="heading bg-primary">Puzzle 1/5</div>
            <div id="puzzle1" style="margin-top:20px">
                <?php include 'includes/puzzle-1.php' ?>
            </div>
            <div style="padding:30px" class="word-list hidden" id="puzzle1-result">
                <div class="row">
                    <div class="col-md-6"><table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table></div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 18</h5>
                            <button class="btn btn-primary" id="puzzle2-start" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="puzzle-2"></div>
        <div id="puzzle-3"></div>
        <div id="puzzle-4"></div>
        <div id="puzzle-5"></div>
    </div>
</body>
</html>

<script src="assets/js/app.js"></script>