const LinkedList = require("./linked-list");

describe("Linked list", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it("Check an empty list", () => {
    expect(list.toString()).toBe("Empty list");
  });

  it("Test addFirst() method", () => {
    list.addFirst(5);
    list.addFirst(12);

    expect(list.getValues()).toStrictEqual([12, 5]);
  });

  it("Test addLast() method", () => {
    list.addLast(5);
    list.addLast(12);

    expect(list.getValues()).toStrictEqual([5, 12]);
  });

  describe("removePosition()", () => {
    it("Exclude position zero (first element)", () => {
      list.addFirst(12);
      list.addFirst(5);
      list.removePosition(0);

      expect(list.getByPosition(0).value).toBe(12);
    });

    it("Exclude third element (position 2)", () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      list.addLast(4);
      list.removePosition(2);

      expect(list.getValues()).toStrictEqual([1, 2, 4]);
    });
  });

  fdescribe("mergeList()", () => {
    fit("Merge two lists, with 3 elements each", () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      const listToMerge = new LinkedList();
      listToMerge.addLast(11);
      listToMerge.addLast(12);
      listToMerge.addLast(13);

      list.mergeList(listToMerge);

      const expectedResponse = [1, 11, 2, 12, 3, 13];
      expect(list.getValues()).toStrictEqual(expectedResponse);
    });

    it("Merge a list with 3 elements, with other with just one", () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      const listToMerge = new LinkedList();
      listToMerge.addLast(11);

      list.mergeList(listToMerge);

      expect(list.getValues()).toStrictEqual([1, 11, 2, 3]);
    });

    it("Merge a list with 3 elements, with other empty list", () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      const listToMerge = new LinkedList();
      list.mergeList(listToMerge);

      expect(list.getValues()).toStrictEqual([1, 2, 3]);
    });
  });
});
