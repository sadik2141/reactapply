///<reference path="Logger.ts"/>
var Ajax;
(function (Ajax) {
    var Options = (function () {
        function Options(action, method, data, async) {
            this.url = "http://localhost/apply/app/control.php";
            this.action = action;
            this.method = method || "post";
            this.data = data || {};
            this.async = async || true;
            if (action) {
                if (data) {
                    this.param = 'action=' + this.action + '&' + paramExport(this.data);
                }
                else {
                    this.param = 'action=' + this.action;
                }
                this.url += '?' + this.param;
            }
        }
        return Options;
    }());
    Ajax.Options = Options;
    function paramExport(object) {
        var encodedString = '';
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += '&';
                }
                encodedString += encodeURI(prop + '=' + object[prop]);
            }
        }
        return encodedString;
    }
    var Service = /** @class */ (function () {
        function Service() {
            var _this = this;
            this.request = function (options, successCallback, errorCallback) {
                var that = _this;
                var http = new XMLHttpRequest();

                http.onload = function () {
                    if (http.readyState == 4) {
                        if (http.status == 200) {
                            var data = JSON.parse(http.responseText);
                            ;
                            if (data['success'] == 1) {
                                successCallback(data['dataVal']);
                            }
                            else {
                                //data error callback
                                dataError();
                            }
                        }
                        else {
                            if (errorCallback) {
                                errorCallback();
                            }
                            else {
                                errorServer();
                            }
                        }
                    }
                };
                // console.log(options.url);
                http.open(options.method, options.url, options.async);
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                http.setRequestHeader("Access-Control-Allow-Origin","*");
                // console.log(options.param);
                http.send(options.param);
            };
            this.post = function (url, successCallback, data, errorCallback) {
                _this.request(new Options(url, "post", data), successCallback, errorCallback);
            };
        }
        return Service;
    }());
    Ajax.Service = Service;
    function dataError() {
        //default Data Error Datacall back
        // var log = new Logger.Service();
        // log.writeLog('Data ErrorMessage');
    }
    function errorServer() {
        //default Serevr Error Datacall back
        // var log = new Logger.Service();
        // log.writeLog('Server Error');
    }
})(Ajax || (Ajax = {}));
function OnloadFunction(callBackFunc) {
    callBackFunc();
}

export default Ajax;