/*!
 * Tame Components v1.0.0
 * https://tamedev.com
 * https://tamedev.xyz
 * Copyright 2021-present Fredrick Peterson
 * Released under the MIT license
 */


!(function ($) {
    "use strict";
    
    /**
    * Check selected dom
    */
    var check = function(selector){
        return $("html, body").find(selector).length;
    };
    
    /**
    * Error response
    */
   const errorResponse = {
        ERROR_200 : 200,
        ERROR_400 : 400,
        ERROR_401 : 401
   };
    
    /**
    * Default plugin options
    */
    var defaultOptions = {
        theme : '.summer',
        element : '.tame-scanner',
        effectClass : '.tame-scanner-effect',
        allowDuplicate : false,
        key_track : function(data){
            return data;
        },
        hover_track : function(data){
            return data;
        }
    };
    
    /**
    * Default css style options
    */
    var defaultStyle = {
        'position': 'relative',
        'width': '100%',
        'height': '100px',
        'display': 'inline-block',
        'padding': '10px 20px',
        'margin': '0 0 20px',
        'border': '2px solid grey',
        'border-radius': '10px',
        'background': 'rgba(207, 204, 204, 0.50)',
        'opacity': '1'
    };
    
    /**
    * Default parent hover css style
    * Encode SVG to base64
    * https://base64.guru/converter/encode/image/svg
    * url("data:image/svg+xml;base64, encoded_svg_data");
    */
    var svg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTJweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgNTIgNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iY3VycmVuY3RDb2xvciIgZD0iTTQ4LjUsMzJBMS42MSwxLjYxLDAsMCwxLDUwLDMzLjV2OC44NVE1MCw0Nyw0NS41LDQ3aC05YTEuNTUsMS41NSwwLDAsMSwwLTMuMWg4LjI1YzEuNjYsMCwyLjI1LS42MSwyLjI1LTIuMzJWMzMuNUExLjYxLDEuNjEsMCwwLDEsNDguNSwzMlptLTQ1LDBBMS42MSwxLjYxLDAsMCwxLDUsMzMuNUg1djguMDhjMCwxLjcxLjU5LDIuMzIsMi4yNSwyLjMySDE1LjVhMS41NSwxLjU1LDAsMCwxLDAsMy4xaC05UTIsNDcsMiw0Mi4zNUgyVjMzLjVBMS42MSwxLjYxLDAsMCwxLDMuNSwzMlpNMjAuMTcsMTRjLjczLDAsMS4zMy40NSwxLjMzLDFoMFYzN2MwLC41NS0uNiwxLTEuMzMsMUgxNi44M2MtLjczLDAtMS4zMy0uNDUtMS4zMy0xaDBWMTVjMC0uNTUuNi0xLDEuMzMtMWgzLjM0Wk0xMS41LDE0YTEsMSwwLDAsMSwxLDFoMFYzN2ExLDEsMCwwLDEtMSwxaC0xYTEsMSwwLDAsMS0xLTFoMFYxNWExLDEsMCwwLDEsMS0xaDFabTE1LDBhMSwxLDAsMCwxLDEsMWgwVjM3YTEsMSwwLDAsMS0xLDFoLTFhMSwxLDAsMCwxLTEtMWgwVjE1YTEsMSwwLDAsMSwxLTFoMVptMTUsMGExLDEsMCwwLDEsMSwxaDBWMzdhMSwxLDAsMCwxLTEsMWgtMWExLDEsMCwwLDEtMS0xaDBWMTVhMSwxLDAsMCwxLDEtMWgxWm0tNi4zMywwYy43MywwLDEuMzMuNDUsMS4zMywxaDBWMzdjMCwuNTUtLjYsMS0xLjMzLDFIMzEuODNjLS43MywwLTEuMzMtLjQ1LTEuMzMtMWgwVjE1YzAtLjU1LjYtMSwxLjMzLTFoMy4zNFpNNDUuNSw1UTUwLDUsNTAsOS42NWgwVjE4LjVhMS41LDEuNSwwLDAsMS0zLDBoMFYxMC40MmMwLTEuNzEtLjU5LTIuMzItMi4yNS0yLjMySDM2LjVhMS41NSwxLjU1LDAsMCwxLDAtMy4xaDlabS0zMCwwYTEuNTUsMS41NSwwLDAsMSwwLDMuMUg3LjI1QzUuNTksOC4xLDUsOC43MSw1LDEwLjQyVjE4LjVBMS42MSwxLjYxLDAsMCwxLDMuNSwyMCwxLjYxLDEuNjEsMCwwLDEsMiwxOC41VjkuNjVRMiw1LDYuNSw1WiIvPg0KPC9zdmc+";
    
    /**
    * internal option to be passed to the build function
    */
    var internal_options;
    
    /**
    * internal option to be passed to the build function
    */
    var external_loader;
    
    /**
    * Register JQuery plugin
    */
    $.fn.tameScanner = function (options) {
        //to enable element be found when document has been fully loaded
        internal_options = options;
        external_loader = $(this[0]);
    };
    
    
    /**
    * Build internal plugin
    */
    function build(options){
        var self = $(this); 
        
        /**
        * create configuration handler object
        */
        self.options = $.extend({}, defaultOptions, options);
        
        /**
        * Remove any leading dot (.) from theme class
        */
        self.options.theme = self.options.theme.replace('.', '');
        
        /**
        * Remove any leading dot (.) from effectClass
        */
        self.options.effectClass = self.options.effectClass.replace('.', '');
        
        
        /**
         * Check if an ID element or not
        * Remove any leading dot (.) from class and personally re-add the dot here
        */
        if(self.options.element.match("^#") == null){
            self.options.element = self.options.element.replace('.', '');
            self.options.element = '.' + self.options.element;
        }
        
        
        /**
        * By default if plugin is placed in head section; lets get all element class name
        * Else get the loader class name
        */
       
        if(typeof($(external_loader)[0]) != 'undefined'){
            
            
            
            var splitClass = $(external_loader)[0].className.split(' ');
            var joinClass = "";
            $.each(splitClass, function(index, value){
                joinClass += "." + value + ", ";
            });
            
            self.options.element = $.trim(joinClass).slice(0, -1);
        }
        
        /**
        * find selector in entire document
        */
        var selector = check($(self.options.element));
        
        /**
        * get selector element
        */
        var element = $(self.options.element);
                
        /**
        * check if element is found
        */
        if(selector === 0){
            self.options.key_track({
                'data' : [],
                'count' : 0,
                'response' : errorResponse.ERROR_400,
                'message' : "Element selector not found"
            });
            return false;
        }
        
        /**
        * check for allowed tag type -- (teaxarea)
        */
        if($(element)[0].localName != 'textarea'){
            self.options.key_track({
                'data' : [],
                'count' : 0,
                'response' : errorResponse.ERROR_401,
                'message' : "Only textarea allowed to be used"
            });
            return false;
        }
        
        
        /**
        * Lets create a parent element for teaxarea
        */
        var str = "";
        str += "<div class='tame-scanner-parent' style='position: relative;'>";
        str += $(element)[0].outerHTML;
        str += "</div>";
        
        
        /**
        * replace element with parent and itself
        */
        $(element).after(str);
        $(".tame-scanner-parent").html($(element));
        
        
        //create ::after suedo effect
        var effect = "";
        effect += "<style>.tame-scanner-effect:after {";
        effect += " content: ''; left: calc(100% - 55%); top: calc(100% - 84%); width: 60px; height: 60px;";
        effect += " background: #fbfffb; background-size: 100%; position: absolute;";
        effect += " background-image: url(" + svg + ");";
        effect += "}.summer:focus{outline: transparent;}</style>";
        
        $(element).append($(effect));
        
        /**
        * create or add class 
        */
        if(self.options.theme === 'summer'){
            $(".tame-scanner").css(defaultStyle);
        }else{
            $(self.options.element).addClass(self.options.theme);
        }
        
        //on key up
        /**
        * Bind 'keyup' event to scanner -- according to scanner behavior and listen to the enter key
        * Anytime scanner execute a scan, enter key is being called after each scan success
        */
        $(element).on('keyup', function(){
            var value = $(element).val(), newData = [], convertToArr;

            if(event.which == 13 || event.keyCode == 13){
                convertToArr = value.split('\n'); //convert string to array data using enter unicode \n
                $.each(convertToArr, function(index, ar_value){
                    ar_value = $.trim(ar_value);

                   //push all non empty value into the newData arrays
                   if(ar_value != ""){
                       //check if value exist within the array
                       var check = newData.indexOf(ar_value);

                       if(self.options.allowDuplicate){
                            newData.push(ar_value); var str = "";
                            $.each(newData, function(newIdex, newValue){
                                str += newValue + "\n";
                            });
                            $(element).val(str);
                       }else{
                            if(check == -1){
                                newData.push(ar_value); var str = "";
                                $.each(newData, function(newIdex, newValue){
                                    str += newValue + "\n";
                                });
                                $(element).val(str);
                            }
                       }
                   } 
                });
                self.options.key_track({
                    'data' : newData,
                    'count' : newData.length,
                    'response' : errorResponse.ERROR_200,
                    'message' : "Configuration successful"
                });
            }
        });
        
        /**
        * Keep track of document mouse move -- in other for us to know if element is on focus or not
        */
        $(document).mousemove(function(){
            if($(".tame-scanner-parent:hover").length != 0){
                $(element).focus(); //autofucs on element
                $(element).parent().addClass(self.options.effectClass);
                self.options.hover_track({
                    'message' : "Mouse over the element",
                    'response' : true
                });
            } else{
                var movetrack = false;
                $('.tame-scanner-parent').on('mouseenter', function(){
                    movetrack = true;
                });
                
                if(movetrack){
                    $(element).focus(); //autofucs on element
                    $(element).parent().addClass(self.options.effectClass);
                    self.options.hover_track({
                        'message' : "Mouse over the element",
                        'response' : movetrack
                    });
                }else{
                    $(element).blur();
                    $(element).parent().removeClass(self.options.effectClass);
                    self.options.hover_track({
                        'message' : "Mouse outside of the element",
                        'response' : movetrack
                    });
                }
            }
       });
    };
   
   
    $(function(){
        build(internal_options);
    });
    
})(jQuery);


