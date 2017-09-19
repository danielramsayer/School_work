<?php
    // Configuration
    require("../includes/config.php");
    
    //else if user reached page via POST (as by submitting a form via POST)
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        //input for stock symbol
        if (empty($_POST["symbol"]))
        {
            apologize("Please input a stock symbol set to continue.");
        }
        
        //this is the query - side note, this checks the yahoo backend.
        $stock = lookup($_POST["symbol"]);
        
        if ($stock === false)
        {
            apologize("This stock symbol has no stock matches, please try again.");
        }
        else
        {
            // Render the result form
            render("quote_form_return.php", ["title" => "Quote", "symbol" => $stock["symbol"], "name" => $stock["name"], "price" => $stock["price"]]);
        }
    }
    else
    {
        // else render form
        render("quote_form.php", ["title" => "Quote"]);
    }
?>