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
<body id="body">
    <div class="container">
        <div id="rules">
            <div class="border border-info bg-info" style="padding:20px 50px;border-radius:10px">
                <center>
                    <h2>Instructions to Participants</h2>
                </center>
                <ul>
                    <li>This </li>
                    <li>contains </li>
                    <li>set </li>
                    <li>of </li>
                    <li>rules</li>
                </ul>
            </div>
            <center>
                <button class="btn btn-primary" id="puzzle1-start" style="width:250px;margin-top:30px">Continue <i class="fas fa-angle-double-right"></i></button>
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
        <div id="puzzle-2" class="hidden">
            <div class="heading bg-primary">Puzzle 2/5</div>
            <div id="puzzle2" style="margin-top:20px">
                <?php include 'includes/puzzle-2.php' ?>
            </div>
            <div style="padding:30px" class="word-list hidden" id="puzzle2-result">
                <div class="row">
                    <div class="col-md-6"><table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table></div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 18</h5>
                            <button class="btn btn-primary" id="puzzle3-start" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="puzzle-3" class="hidden">
            <div class="heading bg-primary">Puzzle 3/5</div>
            <div id="puzzle3" style="margin-top:20px">
                <?php include 'includes/puzzle-3.php' ?>
            </div>
            <div style="padding:30px" class="word-list hidden" id="puzzle3-result">
                <div class="row">
                    <div class="col-md-6"><table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table></div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 18</h5>
                            <button class="btn btn-primary" id="puzzle4-start" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="puzzle-4" class="hidden">
        <div class="heading bg-primary">Puzzle 4/5</div>
            <div id="puzzle4" style="margin-top:20px">
                <?php include 'includes/puzzle-4.php' ?>
            </div>
            <div style="padding:30px" class="word-list hidden" id="puzzle4-result">
                <div class="row">
                    <div class="col-md-6"><table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table></div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 18</h5>
                            <button class="btn btn-primary" id="puzzle5-start" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="puzzle-5" class="hidden">
            <div class="heading bg-primary">Puzzle 5/5</div>
            <div id="puzzle5" style="margin-top:20px">
                <?php include 'includes/puzzle-5.php' ?>
            </div>
            <div style="padding:30px" class="word-list hidden" id="puzzle5-result">
                <div class="row">
                    <div class="col-md-6"><table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table></div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 18</h5>
                            <button class="btn btn-primary" id="puzzle-end" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="endscreen" class="hidden">
            <div class="border border-info bg-info" style="padding:150px 50px;border-radius:10px">
                <center>
                    <h5>
                        You have now completed all 5 word puzzles. Well done! <br><br>
                        Next, we would like you to take a comment to review and rate our puzzle game.
                    </h5>
                </center>
            </div>
            <center>
                <button class="btn btn-primary" id="review" style="width:250px;margin-top:30px">Next <i class="fas fa-angle-double-right"></i></button>
            </center>
        </div>
    </div>
</body>
</html>

<script src="assets/js/app.js"></script>
<script src="assets/js/puzzlejs/puzzle1.js"></script>
<script src="assets/js/puzzlejs/puzzle2.js"></script>
<script src="assets/js/puzzlejs/puzzle3.js"></script>
<script src="assets/js/puzzlejs/puzzle4.js"></script>
<script src="assets/js/puzzlejs/puzzle5.js"></script>