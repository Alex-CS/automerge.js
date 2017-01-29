(function() {
  /**
   * Insert `newNode` directly after `referenceNode`
   *
   * @private
   * @param {Element} newNode
   * @param {Element} referenceNode
   */
  function _insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.appendChild(newNode);
  }

  function _getButton(innerText) {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].innerHTML.indexOf(innerText) != -1) {
        return buttons[i];
      }
    }
  }

  var updateButton = _getButton('Update branch');

  if (updateButton && !updateButton.disabled) {
    var automergeButton = document.createElement('button');
    automergeButton.innerHTML = 'Automerge';
    automergeButton.className = 'btn btn-primary tooltipped tooltipped-multiline tooltipped-n';
    automergeButton.setAttribute('aria-label', 'Update branch then merge');
    _insertAfter(automergeButton, updateButton);

    automergeButton.addEventListener('click', function(event) {
      function _tryMerge() {
        var mergeButton = _getButton('Merge pull request');
        if (mergeButton.disabled) {
          return false;
        }

        mergeButton.click();
        var confirmMerge = _getButton('Confirm  merge');
        confirmMerge.click();
        automergeButton.remove();
        return true;
      }

      if (updateButton) {
        updateButton.click();
        automergeButton.innerHTML = 'Merging...';
        automergeButton.disabled = true;
        window.onbeforeunload = function(e) {
          return 'Automerging. Are you sure you want to close?';
        };

        // If someone merges code to compared branch
        // while updates are done but waiting for merge
        // interval.
        var updateButtonCheck = setInterval(function () {
          var newUpdateButton = _getButton('Update branch');
          !newUpdateButton.disabled && newUpdateButton.click();
        }, 60000);

        var mergeButtonCheck = setInterval(function () {
          if (_tryMerge()) {
            clearInterval(mergeButtonCheck);
            clearInterval(updateButtonCheck);
            window.onbeforeunload = false;
          }
        }, 10000);
      } else {
        _tryMerge();
      }
    });
  }
})();
