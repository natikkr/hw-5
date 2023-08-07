
/*
1) вибрати всі теги із класом circle

2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/
const circleElements = document.querySelectorAll('.circle');


circleElements.forEach((circleElement) => {

  const animationValue = circleElement.getAttribute('data-anim');
  

  circleElement.classList.add(animationValue);
  

  console.log(`Element with animation "${animationValue}"`, circleElement);
});