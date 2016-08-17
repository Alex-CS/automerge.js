(function() {
    var updateButton = getButton("Update branch");
    if (updateButton) {
        updateButton.click();

        var mergeButtonCheck = setInterval(function () {
            if (tryMerge()) {
                clearInterval(mergeButtonCheck);
            }
        }, 10000);
    } else {
        tryMerge();
    }

    function getButton(innerText) {
        var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].innerHTML.indexOf(innerText) != -1) {
                return buttons[i];
            }
        }
    }

    function tryMerge() {
        var mergeButton = getButton("Merge pull request");
        if (!mergeButton.disabled) {
            mergeButton.click();

            var confirmMerge = getButton("Confirm  merge");
            confirmMerge.click();

            return true;
        }

        return false;
    }
})();
