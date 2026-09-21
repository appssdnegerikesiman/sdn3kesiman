const posterOpen = document.querySelector('[data-poster-open]');
const posterDialog = document.querySelector('[data-poster-dialog]');
const posterClose = document.querySelector('[data-poster-close]');

if (posterOpen && posterDialog) {
  posterOpen.addEventListener('click', () => posterDialog.showModal());
  posterClose?.addEventListener('click', () => posterDialog.close());
  posterDialog.addEventListener('click', (event) => {
    if (event.target === posterDialog) posterDialog.close();
  });
}

const game = document.querySelector('[data-nupera-game]');
if (game) {
  const questions = [
    { question: 'Jika kamu berada di petak 8 lalu maju 5 langkah, kamu tiba di petak berapa?', options: ['11', '12', '13'], answer: '13', explanation: 'Benar! 8 + 5 = 13.' },
    { question: 'Ada 24 kartu angka yang dibagi rata kepada 6 kelompok. Setiap kelompok mendapat berapa kartu?', options: ['4', '5', '6'], answer: '4', explanation: 'Tepat! 24 ÷ 6 = 4.' },
    { question: 'Sebuah dadu menunjukkan angka 4 sebanyak dua kali. Berapa jumlah kedua angka tersebut?', options: ['6', '8', '10'], answer: '8', explanation: 'Hebat! 4 + 4 = 8.' }
  ];
  const number = game.querySelector('[data-game-number]');
  const question = game.querySelector('[data-game-question]');
  const options = game.querySelector('[data-game-options]');
  const feedback = game.querySelector('[data-game-feedback]');
  const next = game.querySelector('[data-game-next]');
  const step = document.querySelector('[data-game-step]');
  const progress = document.querySelector('[data-game-progress]');
  let current = 0;
  let score = 0;

  function renderQuestion() {
    const item = questions[current];
    number.textContent = String(current + 1);
    question.textContent = item.question;
    step.textContent = `Soal ${current + 1} dari ${questions.length}`;
    progress.style.width = `${(current / questions.length) * 100}%`;
    feedback.textContent = '';
    feedback.className = 'game-feedback';
    next.hidden = true;
    options.replaceChildren(...item.options.map((label) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.addEventListener('click', () => answerQuestion(button, label));
      return button;
    }));
  }

  function answerQuestion(button, label) {
    const item = questions[current];
    options.querySelectorAll('button').forEach((choice) => {
      choice.disabled = true;
      if (choice.textContent === item.answer) choice.classList.add('correct');
    });
    if (label === item.answer) {
      score += 1;
      feedback.textContent = item.explanation;
      feedback.classList.add('success');
    } else {
      button.classList.add('wrong');
      feedback.textContent = `Belum tepat. Jawaban yang benar adalah ${item.answer}.`;
    }
    progress.style.width = `${((current + 1) / questions.length) * 100}%`;
    next.hidden = false;
    next.textContent = current === questions.length - 1 ? 'Lihat hasil' : 'Soal berikutnya';
  }

  next.addEventListener('click', () => {
    if (current < questions.length - 1) {
      current += 1;
      renderQuestion();
    } else {
      number.textContent = '★';
      question.textContent = `Selesai! Kamu menjawab ${score} dari ${questions.length} soal dengan benar.`;
      options.replaceChildren();
      feedback.textContent = score === questions.length ? 'Luar biasa! Kamu berhasil mencapai puncak tangga numerasi.' : 'Terus berlatih. Setiap langkah membuat kemampuan numerasimu bertambah.';
      feedback.className = 'game-feedback success';
      step.textContent = 'Tantangan selesai';
      next.textContent = 'Main lagi';
      next.hidden = false;
      next.onclick = () => {
        current = 0;
        score = 0;
        next.onclick = null;
        renderQuestion();
      };
    }
  });

  renderQuestion();
}