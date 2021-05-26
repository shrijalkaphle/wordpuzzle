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
            <div class="border border-info bg-primary text-white" style="padding:20px 50px;border-radius:10px">
                <p style="font-size:20px">Dear study participant,</p>
                <br>
                <p style="font-size:20px">Thank you for taking part in this study. Your contribution is very important to us.</p>
                <br>
                <p style="font-size:20px">
                    In this study, we would require you to attempt 3 word puzzles. In each puzzle, you will be provided with a list of words,
                    which can be found in the puzzle. You can spend as long as you need to complete each puzzle. We hope that you can do your best.
                </p>
                <br>
                <p style="font-size:20px">
                    The word puzzles are developed by our research collaborators for a future experiment on “psycholinguistic decision-making processes”. Since this is a pilot study, after completing the puzzles, we would like to receive feedback from you.

                </p>
                <br>
            </div>
            <center>
                <button class="btn btn-primary" id="welcome-screen" style="width:250px;margin-top:30px">Continue <i class="fas fa-angle-double-right"></i></button>
            </center>
        </div>
        <div id="welcome" class="hidden">
            <div class="border border-info bg-primary text-white" style="padding:20px 50px;border-radius:10px">
                <p style="font-size:20px">You will now begin the 1st puzzle game.</p>
                <br> <br>
                <p style="font-size:20px">
                    Once you click on the “Continue >>” button below, the 1st puzzle will be shown
                </p>
                <br> <br>
            </div>
            <center>
                <button class="btn btn-primary" id="puzzle1-start" style="width:250px;margin-top:30px">Continue <i class="fas fa-angle-double-right"></i></button>
            </center>
        </div>
        <div id="puzzle-1" class="hidden">
            <div class="heading bg-primary">Puzzle 1/3</div>
            <div id="puzzle1" style="margin-top:20px">
                <?php include 'includes/puzzle-1.php' ?>
            </div>
            <div style="padding:10px" class="word-list hidden" id="puzzle1-result">
                <div class="row">
                    <div class="col-md-6">
                        <table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table>
                    </div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 4</h5>
                            <h6>You have spent <span id="timetaken"></span> </h6>
                            <button class="btn btn-primary" id="puzzle1-thankyou" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="thankyou-1" class="hidden">
            <div class="border border-info bg-primary text-white" style="padding:20px 50px;border-radius:10px">
                <h5>
                    Thank you for completing the 1<sup>st</sup> puzzle.
                    <br> <br>
                    You will now begin the 2<sup>nd</sup> puzzle game.
                    <br> <br>
                    Once you click on the “Continue >>” button below, the 2nd puzzle will be shown.
                </h5>
            </div>
            <center>
                <button class="btn btn-primary" id="puzzle2-start" style="width:250px;margin-top:30px">Continue <i class="fas fa-angle-double-right"></i></button>
            </center>
        </div>
        <div id="puzzle-2" class="hidden">
            <div class="heading bg-primary">Puzzle 2/3</div>
            <div id="puzzle2" style="margin-top:20px">
                <?php include 'includes/puzzle-2.php' ?>
            </div>
            <div style="padding:30px" class="word-list hidden" id="puzzle2-result">
                <div class="row">
                    <div class="col-md-6">
                        <table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table>
                    </div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 5</h5>
                            <h6>You have spent <span id="timetaken"></span> </h6>
                            <button class="btn btn-primary" id="puzzle2-thankyou" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="thankyou-2" class="hidden">
            <div class="border border-info bg-primary text-white" style="padding:20px 50px;border-radius:10px">
                <h5>
                    Thank you for completing the 2<sup>nd</sup> puzzle.
                    <br> <br>
                    You will now begin the 3<sup>rd</sup> puzzle game.
                    <br> <br>
                    Once you click on the “Continue >>” button below, the 2nd puzzle will be shown.
                </h5>
            </div>
            <center>
                <button class="btn btn-primary" id="puzzle3-start" style="width:250px;margin-top:30px">Continue <i class="fas fa-angle-double-right"></i></button>
            </center>
        </div>
        <div id="puzzle-3" class="hidden">
            <div class="heading bg-primary">Puzzle 3/3</div>
            <div id="puzzle3" style="margin-top:20px">
                <?php include 'includes/puzzle-3.php' ?>
            </div>
            <div style="padding:30px" class="word-list hidden" id="puzzle3-result">
                <div class="row">
                    <div class="col-md-6">
                        <table style="border:0pxtable-layout: fixed;width:100%;" id="result"></table>
                    </div>
                    <div class="col-md-6">
                        <div style="margin-top:30%">
                            <h5>Your score is <span id="score"></span> out of 5</h5>
                            <h6>You have spent <span id="timetaken"></span> </h6>
                            <button class="btn btn-primary" id="puzzle-end" style="width:250px">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="endscreen" class="hidden">
            <div class="border border-info text-white bg-primary" style="padding:150px 50px;border-radius:10px">
                <center>
                    <h5>
                        You have now completed all 3 word puzzles. Well done! <br><br>
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