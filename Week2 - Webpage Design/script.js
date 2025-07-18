function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');

  if (!id) return alert('Please enter a valid Email or ID');

  showSpinner(true);

  // Example student data array
  const students = [
    {
      id: 'S123',
      email: 'john@example.com',
      name: 'John Doe',
      mobile: '9876543210',
      domain: 'Web Development',
      college: 'Dummy University',
      start: '01 June 2024',
      duration: '1 Month',
      photo: 'Assert/male user logo.png',
      assignments: [true, false, true, true],
      certificate: '#'
    },
    {
      id: 'S456',
      email: 'jane@example.com',
      name: 'Jane Smith',
      mobile: '9123456780',
      domain: 'App Development',
      college: 'Sample College',
      start: '15 May 2024',
      duration: '2 Months',
      photo: 'Assert/female user logo.jpg',
      assignments: [true, true, true, true],
      certificate: '#'
    }
    // Add more students as needed
  ];

  setTimeout(() => {
    // Find student by id or email
    const student = students.find(s => s.id.toLowerCase() === id.toLowerCase() || s.email.toLowerCase() === id.toLowerCase());

    if (student) {
      const html = `
        <div class="card">
          <img src="${student.photo}" alt="Photo" />
          <h3>${student.name}</h3>
          <p>Email: ${student.email}</p>
          <p>Mobile: ${student.mobile}</p>
          <p>Domain: ${student.domain}</p>
          <p>College: ${student.college}</p>
          <p>Start Date: ${student.start}</p>
          <p>Duration: ${student.duration}</p>
          <h4>Assignment Status</h4>
          <div class="assignment-status">
            ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
          </div>
          <p>Status: Completed</p>
          <a href="${student.certificate}" target="_blank">View Certificate</a>
        </div>
      `;
      resultBox.innerHTML = html;
      showToast('✅ Student found.');
    } else {
      resultBox.innerHTML = '';
      showToast('❌ Student not found.');
    }
    showSpinner(false);
  }, 1200);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').style.display = show ? 'block' : 'none';
}
