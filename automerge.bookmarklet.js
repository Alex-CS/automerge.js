javascript:(function()%7B(function()%20%7Bfunction%20_insertBefore(newNode%2C%20referenceNode)%20%7BreferenceNode.parentNode.insertBefore(newNode%2C%20referenceNode.previousSibling)%3B%7Dfunction%20_getButton(innerText)%20%7Bvar%20buttons%20%3D%20document.getElementsByTagName('button')%3Bfor%20(var%20i%20%3D%200%3B%20i%20%3C%20buttons.length%3B%20i%2B%2B)%20%7Bif%20(buttons%5Bi%5D.innerHTML.indexOf(innerText)%20!%3D%20-1)%20%7Breturn%20buttons%5Bi%5D%3B%7D%7D%7Dvar%20updateButton%20%3D%20_getButton('Update%20branch')%3Bif%20(updateButton%20%26%26%20!updateButton.disabled)%20%7Bvar%20automergeButton%20%3D%20document.createElement('button')%3BautomergeButton.innerHTML%20%3D%20'Automerge'%3BautomergeButton.className%20%3D%20'btn%20btn-primary'%3B_insertBefore(automergeButton%2C%20updateButton)%3BautomergeButton.addEventListener('click'%2C%20function(event)%20%7Bfunction%20_tryMerge()%20%7Bvar%20mergeButton%20%3D%20_getButton('Merge%20pull%20request')%3Bif%20(mergeButton.disabled)%20%7B%20return%20false%20%7D%3BmergeButton.click()%3Bvar%20confirmMerge%20%3D%20_getButton('Confirm%20%20merge')%3BconfirmMerge.click()%3BautomergeButton.remove()%3Breturn%20true%3B%7Dif%20(updateButton)%20%7BupdateButton.click()%3BautomergeButton.innerHTML%20%3D%20'Merging...'%3BautomergeButton.disabled%20%3D%20true%3Bwindow.onbeforeunload%20%3D%20function(e)%20%7Breturn%20'Automerging.%20Are%20you%20sure%20you%20want%20to%20close%3F'%3B%7D%3B%2F%2F%20If%20someone%20merges%20code%20to%20compared%20branch%2F%2F%20while%20updates%20are%20done%20but%20waiting%20for%20merge%2F%2F%20interval.var%20updateButtonCheck%20%3D%20setInterval(function%20()%20%7Bvar%20newUpdateButton%20%3D%20_getButton('Update%20branch')%3B!newUpdateButton.disabled%20%26%26%20newUpdateButton.click()%3B%7D%2C%2060000)%3Bvar%20mergeButtonCheck%20%3D%20setInterval(function%20()%20%7Bif%20(_tryMerge())%20%7BclearInterval(mergeButtonCheck)%3BclearInterval(updateButtonCheck)%3Bwindow.onbeforeunload%20%3D%20false%3B%7D%7D%2C%2010000)%3B%7D%20else%20%7B_tryMerge()%3B%7D%7D)%3B%7D%7D)()%7D)()
