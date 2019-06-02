const LinkedList = function() {
  this.first = null;

  function Node(value, next = null) {
    this.next = next;
    this.value = value;
  }

  const isEmpty = () => this.first === null;

  const emptyAdd = node => {
    if (isEmpty()) {
      this.first = node;
      return true;
    }
    return false;
  };

  const addFirst = value => {
    const newNode = new Node(value);

    if (emptyAdd(newNode)) {
      return;
    }

    newNode.next = this.first;
    this.first = newNode;
  };

  const addLast = value => {
    const newNode = new Node(value);

    if (emptyAdd(newNode)) {
      return;
    }

    let currentNode = this.first;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  };

  const removePosition = position => {
    if (isEmpty()) {
      return;
    }

    let currentNode = this.first;
    // This is because it has just one element
    if (currentNode.next === null) {
      this.first = null;
      return;
    }

    if (position === 0) {
      this.first = currentNode.next;
      return;
    }

    let pastNode = null;
    let count = 0;
    while (count < position && currentNode.next !== null) {
      pastNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    pastNode.next = currentNode.next;
  };

  const getByPosition = position => {
    if (isEmpty()) {
      return null;
    }

    let count = 0;
    let currentNode = this.first;
    while (count !== position && currentNode.next !== null) {
      currentNode = currentNode.next;
      count++;
    }

    return count === position ? currentNode : null;
  };

  const mergeList = listToMerge => {
    let index = 0;
    let thisListNode = getByPosition(index);
    let currentNode = listToMerge.getByPosition(index);

    while (currentNode !== null && thisListNode !== null) {
      // console.log("thisListNode", index, thisListNode);
      // console.log("currentNode", index, currentNode);
      thisListNode.next = currentNode;
      index++;
      currentNode.next = getByPosition(index);
      // currentNode = null; // uncomment this and comment above, v8 will break
      currentNode = listToMerge.getByPosition(index);
    }
  };

  const getValues = () => {
    if (isEmpty()) {
      return [];
    }

    let values = [];
    let currentNode = this.first;
    do {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode !== null);
    return values;
  };

  const toString = () => {
    if (isEmpty()) {
      return "Empty list";
    }

    let message = "List elements: ";
    let currentNode = this.first;
    do {
      message += `${currentNode.value} `;
      currentNode = currentNode.next;
    } while (currentNode !== null);
    return message;
  };

  return {
    addFirst,
    addLast,
    getByPosition,
    getValues,
    mergeList,
    removePosition,
    toString
  };
};

module.exports = LinkedList;
