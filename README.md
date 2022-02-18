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
        element: '.your-class-name',
    });
```

- If plugin is at the end of the document body, then you can pass the class/id name before you initialize plugin 
```
    $(".element-selector").tameScanner({
        
    });
```

- Example 
```
    $("load").tameScanner({
        theme: '.sunny',
        element: '.your-class-name',
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




- If you love this jQuery Plugin, you can [Buy Tame Developers a coffee](https://www.buymeacoffee.com/tamedevelopers)

