document.addEventListener('DOMContentLoaded', function() {
    // Event handler for viewing results
    document.getElementById('view-result-btn').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var course = document.getElementById('course').value;
        var subject = document.getElementById('subject').value;
        document.getElementById('adi').classList.add('d-none');

        // Retrieve user details from local storage
        var storedUserDetails = JSON.parse(localStorage.getItem('userResults'));
        var filteredResults = storedUserDetails.filter(function(userDetails) {
            return userDetails.name === name &&
                   userDetails.course === course &&
                   userDetails.selectedSubject === subject;
        });
        if (filteredResults.length > 0) {
            // Display user details and results
            var userDetailsDiv = document.getElementById('user-details');
        userDetailsDiv.innerHTML = `
        <h2>User Details</h2>
        <p>Name: ${filteredResults[0].name}</p>
        <p>Course: ${filteredResults[0].course}</p>
        <p>Subject: ${filteredResults[0].selectedSubject}</p>
        <h2>Exam Results</h2>
        <p>Score: ${filteredResults[0].score}</p>
            `;


        } else {
            // Handle the case where user details or subject do not match
            console.log('User details or subject do not match.');
        }
    });
});
