var btnFuncs = {
    ["new"]: function(btn) {
        var option = confirm("Create new RBMK or just remove the columns while keeping the width and height?")
        var res = prompt(`Are you sure? Type "rbmk" if you are really sure`)
        if (res == "rbmk") 
            if (option == true) 
                // Ask
                var width = prompt("RBMK width")
                var height = prompt("RBMK height")}}