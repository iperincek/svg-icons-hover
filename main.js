
<!doctype html>
<!--[if lt IE 9]><html class="ie"><![endif]-->
<!--[if IE 9]><html class="ie9""><![endif]-->
<!--[if gte IE 9]><!--><html><!--<![endif]-->
<head>

<meta charset="utf-8" />
<meta name="viewport" content="user-scalable = yes">
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<title></title>

</head>


<body>



<div class="contact_social">
<h3>Follow Us</h3>

    <a href="http://pinterest.com/slovell72/" target="_blank"><img src="/social/pinterest.svg" class="svg" alt="Pinterest"></a>
    <a href="https://www.facebook.com/suzannelovellinc" target="_blank"><img src="/social/facebook.svg" class="svg" alt="Facebook"></a>
    <a href="https://twitter.com/slovellinc" target="_blank"><img src="/social/twitter.svg" class="svg" alt="Twitter"></a>
    <a href="http://instagram.com/slovellinc" target="_blank"><img src="/social/instagram.svg" class="svg" alt="Instagram"></a>
</div>

<script src="modernizr.custom.38801.js">
<script>
// short script to not require full modernizer and check for svg
var $features = new Object();
var $html = document.documentElement;
$features.svg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
$html.className += ($features.svg) ? " svg" : " no-svg";


// Check for svg extensions and preplace with png
$(document).ready(function() {
    if ($('html').hasClass( "no-svg" ) || $('html').hasClass( "ie9" )) {
        $('img[src$=".svg"]').each(function() {
            var $img = $(this);
            $img.attr('src', $img.attr('src').replace(/svg$/, 'png'));
        });
    }
    
else

// Check for svg extensions and preplace with png
// Replace all SVG images with inline SVG, necessary for css fill and hover states.
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');    
        });
});

</script>

</body>
</html>