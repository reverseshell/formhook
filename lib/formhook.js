function hookform(f, callback)
{
    if (f.onsubmit == null)
    {
        // No onsubmit handler, so install ours directly.
        f.onsubmit = function() { callback(this); };
    }
    else
    {
        // Need to find the submit input
        var is = f.getElementsByTagName('input');
        
        // Adding a dummy button messes with the length, so store early.
        count = is.length;
        
        for (i = 0; i < count; i++)
        {
            if (is[i].type.toLowerCase() == 'submit')
            {
                // Create a dummy element
                var dummy = document.createElement('button');
                
                // Copy the submit button's name to the button innerHTML
                dummy.innerHTML = is[i].value;
                
                // Set the handler to call the callback and then the original onsubmit handler.
                if (navigator.appName.indexOf('Microsoft') == 0)
                {
                    dummy.onclick = function() { callback(this); var r = this.parentNode.onsubmit(); if (r) { this.parentNode.submit(); } } // IE8
                }
                else
                {
                    dummy.onclick = function() { callback(this); }; // SAFARI MAC, SAFARI IPHONE, FIREFOX, CHROME   
                }
                
                // Insert into the DOM and hide the submit button
                f.insertBefore(dummy, is[i]);
                is[i].style.display = 'none';
            }
        }
    }
}