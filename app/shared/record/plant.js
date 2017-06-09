"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Plant = (function (_super) {
    __extends(Plant, _super);
    function Plant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Plant.prototype, "record", {
        get: function () {
            return this._record;
        },
        set: function (value) {
            this._record = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plant.prototype, "spot", {
        get: function () {
            //console.log('Plant - getUbicación');
            var espaldera = this.getAttribute('5807af5f31f55d0010aaffe4').value;
            var hilera = this.getAttribute('5807af9231f55d0010aaffe5').value;
            var posicion = this.getAttribute('5807afe331f55d0010aaffe6').value || '-';
            if (espaldera && hilera) {
                return "E" + espaldera + " H" + hilera + " P" + posicion;
            }
            return 'ubicación ***';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plant.prototype, "name", {
        get: function () {
            //console.log('Plant - getUbicación');
            var espaldera = this.getAttribute('5807af5f31f55d0010aaffe4').value;
            var hilera = this.getAttribute('5807af9231f55d0010aaffe5').value;
            var posicion = this.getAttribute('5807afe331f55d0010aaffe6').value || '-';
            if (espaldera && hilera) {
                return "E" + espaldera + " H" + hilera + " P" + posicion;
            }
            return 'ubicación ***';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plant.prototype, "position", {
        get: function () {
            return this.getAttribute('5807afe331f55d0010aaffe6').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plant.prototype, "hilera", {
        get: function () {
            return this.getAttribute('5807af9231f55d0010aaffe5').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plant.prototype, "espaldera", {
        get: function () {
            return this.getAttribute('5807af5f31f55d0010aaffe4').value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}(_1.Record));
exports.Plant = Plant;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUE0QjtBQUU1QjtJQUEyQix5QkFBTTtJQUFqQzs7SUE2Q0EsQ0FBQztJQTFDRyxzQkFBVyx5QkFBTTthQUlqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFORCxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsdUJBQUk7YUFBZjtZQUNJLHNDQUFzQztZQUN0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDakUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7WUFDMUUsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxNQUFJLFNBQVMsVUFBSyxNQUFNLFVBQUssUUFBVSxDQUFDO1lBQ25ELENBQUM7WUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUJBQUk7YUFBZjtZQUNJLHNDQUFzQztZQUN0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDakUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7WUFDMUUsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxNQUFJLFNBQVMsVUFBSyxNQUFNLFVBQUssUUFBVSxDQUFDO1lBQ25ELENBQUM7WUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlCQUFNO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0QkFBUzthQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBQ0wsWUFBQztBQUFELENBQUMsQUE3Q0QsQ0FBMkIsU0FBTSxHQTZDaEM7QUE3Q1ksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWNvcmQgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCBjbGFzcyBQbGFudCBleHRlbmRzIFJlY29yZCB7XG4gICAgcHJpdmF0ZSBfcmVjb3JkOiBSZWNvcmQ7XG5cbiAgICBwdWJsaWMgc2V0IHJlY29yZCh2YWx1ZTogUmVjb3JkKSB7XG4gICAgICAgIHRoaXMuX3JlY29yZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVjb3JkKCk6IFJlY29yZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWNvcmQ7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3BvdCgpOiBzdHJpbmcge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdQbGFudCAtIGdldFViaWNhY2nDs24nKTtcbiAgICAgICAgbGV0IGVzcGFsZGVyYSA9IHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWY1ZjMxZjU1ZDAwMTBhYWZmZTQnKS52YWx1ZTtcbiAgICAgICAgbGV0IGhpbGVyYSA9IHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWY5MjMxZjU1ZDAwMTBhYWZmZTUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHBvc2ljaW9uID0gdGhpcy5nZXRBdHRyaWJ1dGUoJzU4MDdhZmUzMzFmNTVkMDAxMGFhZmZlNicpLnZhbHVlIHx8ICctJztcbiAgICAgICAgaWYgKGVzcGFsZGVyYSAmJiBoaWxlcmEpIHtcbiAgICAgICAgICAgIHJldHVybiBgRSR7ZXNwYWxkZXJhfSBIJHtoaWxlcmF9IFAke3Bvc2ljaW9ufWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ViaWNhY2nDs24gKioqJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnUGxhbnQgLSBnZXRVYmljYWNpw7NuJyk7XG4gICAgICAgIGxldCBlc3BhbGRlcmEgPSB0aGlzLmdldEF0dHJpYnV0ZSgnNTgwN2FmNWYzMWY1NWQwMDEwYWFmZmU0JykudmFsdWU7XG4gICAgICAgIGxldCBoaWxlcmEgPSB0aGlzLmdldEF0dHJpYnV0ZSgnNTgwN2FmOTIzMWY1NWQwMDEwYWFmZmU1JykudmFsdWU7XG4gICAgICAgIGxldCBwb3NpY2lvbiA9IHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWZlMzMxZjU1ZDAwMTBhYWZmZTYnKS52YWx1ZSB8fCAnLSc7XG4gICAgICAgIGlmIChlc3BhbGRlcmEgJiYgaGlsZXJhKSB7XG4gICAgICAgICAgICByZXR1cm4gYEUke2VzcGFsZGVyYX0gSCR7aGlsZXJhfSBQJHtwb3NpY2lvbn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd1YmljYWNpw7NuICoqKic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJzU4MDdhZmUzMzFmNTVkMDAxMGFhZmZlNicpLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGlsZXJhKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnNTgwN2FmOTIzMWY1NWQwMDEwYWFmZmU1JykudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBlc3BhbGRlcmEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCc1ODA3YWY1ZjMxZjU1ZDAwMTBhYWZmZTQnKS52YWx1ZTtcbiAgICB9XG59XG4iXX0=