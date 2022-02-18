# Tame Barcode Scanner - TMBS

### @author Fredrick Peterson (Tame Developers)
jQuery Library - Tame Barcode scanner plugin
```
|--------------------------------------------------------------------------
|https://github.com/tamedevelopers/tame-scanner
```
[Github Link to Plugin](https://github.com/tamedevelopers/tame-scanner)

```
Download the entire code and navigate to example/index.html and run on your browser
or get the Plugin on [dir] src/tame-scanner.js or src/tame-scanner.min.js
```

***
```
|--------------------------------------------------------------------------
| ALL Response Code
| response code returns 200 on successful plugin configuration or returns

-> ERROR_200 - "Configuration successful"
-> ERROR_400 - "Element selector not found"
-> ERROR_401 - "Only textarea allowed to be used"
| *************************************
```
***

## Load plugin
```
tame-scanner.js
tame-scanner.min.js (minified -v)
```


## Initialize Plugin
```
$("load").tameScanner();
```

**We have six (6) properties to pass to the plugin object**

```
: theme -- custom class name
: element -- textarea element id or classname
: effectClass -- suedo css after effect on mouse hover
: allowDuplicate -- allow duplicated barcode data
: key_track -- function (on each barcode scanner response)
: hover_track -- function (On element hover 'in' and 'out')

```

## INPUT HTML STRUCTURE

- You can use (.) class or (#) id selector
```
<textarea rows="4" class="your-class-name" id="your-id"></textarea>
```


## Customize plugin object
- If your plugin is being loaded inside the head of document, then you need to pass in the (element) property
```
    $("load").tameScanner({
        element: '.selector-name',
    });
```

- If plugin is at the bottom of document body, then you can pass the class/id name before you initialize plugin 
```
    $(".selector-name").tameScanner({
        
    });
```

### Example 
```
    $("load").tameScanner({
        theme: '.sunny',
        element: '.selector-name',
        effectClass: '.tame-scanner-effect',
        allowDuplicate: false,
        key_track : function(data){
            console.log(data);
        },
        hover_track : function(data){
            console.log(data);
        }
    });
```

### Theme property
```
    textarea element css class name 
    i.e 
    .scanner{
        position: relative;
    }

    $(".element-selector").tameScanner({
        theme: '.scanner'
    });
```

### Element property
```
    textarea selector name
    i.e 
    <textarea rows="4" class="scanner"></textarea>

    $(".element-selector").tameScanner({
        element: '.scanner'
    });
```

### After Effect
```
    When you hover on element, by default we added a classname that use suedo::after css
    .tame-scanner-effect

    - Please refer to the sample css stylesheet to see the design for .sample-effect

    $(".element-selector").tameScanner({
        effectClass: '.sample-effect'
    });
```

### Allow duplicate
```
    By default; this is set to false
    Allow duplicate entry of scanned data

    boolean: false | true
```

### Key Track
```
    key_track: expect a function and returns all scanned data information

    $(".element-selector").tameScanner({
        key_track: function(data){
            console.log(data);
        }
    });

    - Example 2
    $(".element-selector").tameScanner({
        key_track: function(data){
            if(data.response == 200){
                //execute code to output scanned data to the browser
                //check example/index.html file for live sample
            }
        }
    });


    
    object{
        count: 0, // integer
        data: [], //arrays of all scanned data
        message: 'message', //string
        response: 200 //integer -- response code
        
    }
```

### Hover Track
```
    hover_track: expect a function and returns hover data information

    $(".element-selector").tameScanner({
        hover_track: function(data){
            console.log(data);
        }
    });

    - Example 2
    $(".element-selector").tameScanner({
        hover_track: function(data){

            //if true
            if(data.response){ 
                //mouse is inside the element
            }else{
                //mouse is outside the element
            }
        }
    });


    
    object{
        message: 'message', //string
        response: true //boolean -- true | false
        
    }
```

### Default Element Recreate
```
    By default we have recreate the element data and placed inside a div.container with classname of
    .tame-scanner-parent

    In other for us to keep track of mouse move within the entire page.
    effectClass property is added to the parent element and not the main element.

    Feel free to inspect the document to see how the behavior occur.
```




- If you love this jQuery Plugin, you can [Buy Tame Developers a coffee](https://www.buymeacoffee.com/tamedevelopers)

