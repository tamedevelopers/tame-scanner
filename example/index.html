<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tame Barcode Scanner</title>
    
    <link href="src/style.css" rel="stylesheet">
</head>
<body>
    <center>
        <form method="GET" autocomplete="off">

            <h3>Tame Scanner - Barcode:</h3>
            
            <!--barcode element holder-->
            <textarea rows="4" class="tame-scanner tame-scanner-f"></textarea>
            <!--//End barcode element holder-->
            
            
            <!--Barcode warning msg-->
            <div class="scanner_warning">
                Please move mouse into the above box to start scanning
            </div>
            <!--//End Barcode warning msg-->
            
            
            <!--barcode data inputs-->
            <div class="input_elem"></div>
            <!--//End barcode data inputs-->
            
         </form>
    </center>

    <script src="src/jquery.min.js"></script>
    <script src="src/tame-scanner.js"></script>
    <script>
        
        //begin scanner
        $("load").tameScanner({
            'theme' : 'summer',
            'element' : 'tame-scanner',
            'effectClass' : 'tame-scanner-effect',
            'allowDuplicate' : true,
            key_track : function(data){
                if(data.error == 200){
                    var str = ""; $(".input_elem").html('');
                    $.each(data.data, function(index, value){
                        str += "<input type='text' name='scadata[]' class='input_class' value='";
                        str += "" + value + "'>";
                    });
                    $(".input_elem").append(str);
                }else{
                    console.log(data.error);
                }
            },
            hover_track : function(data){
                if(data.error){
                    //when mouse is inside the div container
                    $(".scanner_warning").slideUp(100);
                }else{
                    $(".scanner_warning").slideDown(100);
                }
            }
        });
        
    </script>
</body>
</html>
