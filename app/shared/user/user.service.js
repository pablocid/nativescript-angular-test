"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var application_settings_1 = require("application-settings");
//import { Config } from "../config";
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._authUrl = "https://pmg-restful-dev.herokuapp.com/auth/local";
    }
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        //headers.append('Cache-Control', 'no-cache');
        return this.http.post(this._authUrl, JSON.stringify(user), { headers: headers })
            .map(function (x) { return x.json(); })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(this._authUrl, JSON.stringify(user), { headers: headers })
            .map(function (x) { return x.json(); })
            .map(function (x) {
            application_settings_1.setString('token', x.token);
            return x;
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQiw2REFBNEQ7QUFHNUQscUNBQXFDO0FBR3JDLElBQWEsV0FBVztJQUdwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxrREFBa0QsQ0FBQztJQUN2RSxDQUFDO0lBRU0sOEJBQVEsR0FBZixVQUFnQixJQUFVO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCw4Q0FBOEM7UUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDbEUsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQzthQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUNsRSxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxVQUFBLENBQUM7WUFDRixnQ0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBSHJCLFdBQVcsQ0FrQ3ZCO0FBbENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IHNldFN0cmluZywgZ2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG4vL2ltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9hdXRoVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5fYXV0aFVybCA9IFwiaHR0cHM6Ly9wbWctcmVzdGZ1bC1kZXYuaGVyb2t1YXBwLmNvbS9hdXRoL2xvY2FsXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIC8vaGVhZGVycy5hcHBlbmQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fYXV0aFVybCwgSlNPTi5zdHJpbmdpZnkodXNlciksIHsgaGVhZGVycyB9KVxuICAgICAgICAgICAgLm1hcCh4ID0+IHguanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLl9hdXRoVXJsLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwgeyBoZWFkZXJzIH0pXG4gICAgICAgICAgICAubWFwKHggPT4geC5qc29uKCkpXG4gICAgICAgICAgICAubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0cmluZygndG9rZW4nLCB4LnRva2VuKVxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=