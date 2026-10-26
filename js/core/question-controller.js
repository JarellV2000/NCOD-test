/** Offline question preview. This does NOT implement multiplayer or scoring. */
export function mountQuestionPreview({ root, title, questions }) {
  if (!root) return;
  let index = 0;
  const wrap = document.createElement('section'); wrap.className = 'play-panel';
  const status = document.createElement('p'); status.className = 'muted';
  const prompt = document.createElement('p'); prompt.className = 'prompt'; prompt.setAttribute('aria-live', 'polite');
  const next = document.createElement('button'); next.type = 'button'; next.textContent = 'Next Question →';
  const note = document.createElement('p'); note.className = 'muted';
  note.textContent = 'Offline question preview only. Multiplayer, voting, profiles, and rewards are not connected.';
  function render() {
    if (!Array.isArray(questions) || !questions.length) {
      status.textContent = `${title} · Question bank empty`;
      prompt.textContent = 'No questions have been added to this mode yet. Edit its questions.js file to add approved prompts.';
      next.hidden = true; return;
    }
    status.textContent = `${title} · Question ${index + 1} of ${questions.length}`;
    prompt.textContent = questions[index]; next.hidden = questions.length < 2;
  }
  next.addEventListener('click', () => { index = (index + 1) % questions.length; render(); });
  wrap.append(status, prompt, next, note); root.replaceChildren(wrap); render();
}
