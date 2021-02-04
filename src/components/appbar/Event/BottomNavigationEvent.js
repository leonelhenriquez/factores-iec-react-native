class BottomNavigationEvent {
  static ListHandleIndexChangeEvents = [];
  static addHandleIndexChangeEvent = (event) =>
    BottomNavigationEvent.ListHandleIndexChangeEvents.push(event);
  static handleIndexChange = (index) => {
    BottomNavigationEvent.ListHandleIndexChangeEvents.forEach((event) =>
      setTimeout(() => event(index), 0)
    );
  };
}

export default BottomNavigationEvent;
