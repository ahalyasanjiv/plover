// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
 var counter = 1;
jQuery('button.newGoal').click(function(event) {
	event.preventDefault();
	counter++;
	//var obj = document.getElementById("newObjective").value;
	//var ded = document.getElementById("newDeadline").value;
	/*if(obj == "" || ded == "") {
		alert("Objective text field is empty");
	} else {*/
		var newRow = jQuery('<tr><td><input type="text" name="first_name' +
        counter + '"/></td><td><input type="text" name="last_name' +
        counter + '"/></td></tr>');
    jQuery('table.objectTable').append(newRow);
		
	}
});