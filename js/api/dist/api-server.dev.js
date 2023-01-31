"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiServer =
/*#__PURE__*/
function () {
  function ApiServer() {
    _classCallCheck(this, ApiServer);
  }

  _createClass(ApiServer, [{
    key: "changeIsDoneItem",
    value: function changeIsDoneItem(task) {
      var response;
      return regeneratorRuntime.async(function changeIsDoneItem$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("http://localhost:3000/posts/".concat(task.id), {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  isDone: task.isDone = !task.isDone
                })
              }));

            case 2:
              response = _context.sent;
              loadPage(getPageName() || 'My');

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(task) {
      var response;
      return regeneratorRuntime.async(function deleteItem$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(fetch("http://localhost:3000/posts/".concat(task.id), {
                method: 'DELETE'
              }));

            case 2:
              response = _context2.sent;
              if (response.status === 404) console.log('Не удалось удалить дело, так как его не существует');
              tasks = tasks.filter(function (item) {
                return item.id != task.id;
              });
              loadPage(getPageName() || 'My');

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "loadItems",
    value: function loadItems() {
      var response, taskItems;
      return regeneratorRuntime.async(function loadItems$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fetch('http://localhost:3000/posts'));

            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              taskItems = _context3.sent;
              tasks = taskItems.map(function (item) {
                return new Task(item.id, item.name, item.isDone, item.owner);
              });
              loadPage(getPageName() || 'My');

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "patchItem",
    value: function patchItem(task) {
      var response;
      return regeneratorRuntime.async(function patchItem$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(fetch("http://localhost:3000/posts/".concat(task.id), {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
              }));

            case 2:
              response = _context4.sent;
              apiServer.loadItems();

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "postItem",
    value: function postItem(task) {
      var response, taskItem;
      return regeneratorRuntime.async(function postItem$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
              }));

            case 2:
              response = _context5.sent;
              _context5.next = 5;
              return regeneratorRuntime.awrap(response.json());

            case 5:
              taskItem = _context5.sent;
              tasks.push(new Task(taskItem.id, taskItem.name, taskItem.isDone, taskItem.owner));
              loadPage(getPageName() || 'My');

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return ApiServer;
}();

var apiServer = new ApiServer();