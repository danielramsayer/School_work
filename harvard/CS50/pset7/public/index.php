<?php
    // configuration
    require("../includes/config.php"); 

    $id = $_SESSION["id"];
    
    // query user's portfolio
    $rows = CS50::query("SELECT * FROM portfolio WHERE id = $id");	
	
	// create new array to store all info for portfolio table
	$positions = [];
	
	// for each of user's stocks
	foreach ($rows as $row)	
    {
        //Check against yahoo
        $stock = lookup($row["symbol"]);
        
        if ($stock != false)
        {
    		$positions[] = [
    		"name" => $stock["name"],
    		"price" => $stock["price"],
    		"shares" => $row["shares"],
    		"symbol" => $row["symbol"],
    		"total" => sprintf("%.2f", $row["shares"]*$stock["price"])
    		];
        }	  
    }
    
    // query cash for template
    $cash =  CS50::query("SELECT username, cash FROM users WHERE id = $id");
    // render portfolio (pass in new portfolio table and cash)
    render("portfolio.php", ["title" => "positions", "positions" => $positions, "cash" => $cash]);
?>
