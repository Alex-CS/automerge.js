javascript:(function()%7B(function()%7Bvar%20updateButton%3DgetButton(%22Update%20branch%22)%3Bif(updateButton)%7BupdateButton.click()%3Bvar%20mergeButtonCheck%3DsetInterval(function%20()%7Bif(tryMerge())%7BclearInterval(mergeButtonCheck)%3B%7D%7D%2C10000)%3B%7Delse%7BtryMerge()%3B%7Dfunction%20getButton(innerText)%7Bvar%20buttons%3Ddocument.getElementsByTagName('button')%3Bfor(var%20i%3D0%3Bi%3Cbuttons.length%3Bi%2B%2B)%7Bif(buttons%5Bi%5D.innerHTML.indexOf(innerText)!%3D-1)%7Breturn%20buttons%5Bi%5D%3B%7D%7D%7Dfunction%20tryMerge()%7Bvar%20mergeButton%3DgetButton(%22Merge%20pull%20request%22)%3Bif(!mergeButton.disabled)%7BmergeButton.click()%3Bvar%20confirmMerge%3DgetButton(%22Confirm%20%20merge%22)%3BconfirmMerge.click()%3Breturn%20true%3B%7Dreturn%20false%3B%7D%7D)()%7D)()
