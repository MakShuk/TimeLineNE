function taskAdd(taskAddTextAreaClas) {
  const testInput = (taskAddTextAreaClas) => {
    const input = document.querySelector(taskAddTextAreaClas);

    input.addEventListener('input', () => {
      if (!input.value.length) {
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });
  };
  testInput(taskAddTextAreaClas);
}

export default taskAdd;
