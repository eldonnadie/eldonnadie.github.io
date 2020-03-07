(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return []; },
        patchThen: function () { return noop; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var e_1, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise =  false || resolve(value));
            }
            function onReject(error) {
                promise && (promise =  false || reject(error));
            }
            try {
                for (var values_1 = __values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                    var value = values_1_1.value;
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var e_2, _a;
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _loop_2 = function (value) {
                if (!isThenable(value)) {
                    value = this_1.resolve(value);
                }
                var curValueIndex = valueIndex;
                value.then(function (value) {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            };
            var this_1 = this;
            try {
                for (var values_2 = __values(values), values_2_1 = values_2.next(); !values_2_1.done; values_2_1 = values_2.next()) {
                    var value = values_2_1.value;
                    _loop_2(value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (values_2_1 && !values_2_1.done && (_a = values_2.return)) _a.call(values_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    if (NativePromise) {
        patchThen(NativePromise);
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('fetch', function (global, Zone, api) {
    var fetch = global['fetch'];
    var ZoneAwarePromise = global.Promise;
    var symbolThenPatched = api.symbol('thenPatched');
    var fetchTaskScheduling = api.symbol('fetchTaskScheduling');
    var fetchTaskAborting = api.symbol('fetchTaskAborting');
    if (typeof fetch !== 'function') {
        return;
    }
    var OriginalAbortController = global['AbortController'];
    var supportAbort = typeof OriginalAbortController === 'function';
    var abortNative = null;
    if (supportAbort) {
        global['AbortController'] = function () {
            var abortController = new OriginalAbortController();
            var signal = abortController.signal;
            signal.abortController = abortController;
            return abortController;
        };
        abortNative = api.patchMethod(OriginalAbortController.prototype, 'abort', function (delegate) { return function (self, args) {
            if (self.task) {
                return self.task.zone.cancelTask(self.task);
            }
            return delegate.apply(self, args);
        }; });
    }
    var placeholder = function () { };
    global['fetch'] = function () {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        var options = args.length > 1 ? args[1] : null;
        var signal = options && options.signal;
        return new Promise(function (res, rej) {
            var task = Zone.current.scheduleMacroTask('fetch', placeholder, args, function () {
                var fetchPromise;
                var zone = Zone.current;
                try {
                    zone[fetchTaskScheduling] = true;
                    fetchPromise = fetch.apply(_this, args);
                }
                catch (error) {
                    rej(error);
                    return;
                }
                finally {
                    zone[fetchTaskScheduling] = false;
                }
                if (!(fetchPromise instanceof ZoneAwarePromise)) {
                    var ctor = fetchPromise.constructor;
                    if (!ctor[symbolThenPatched]) {
                        api.patchThen(ctor);
                    }
                }
                fetchPromise.then(function (resource) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    res(resource);
                }, function (error) {
                    if (task.state !== 'notScheduled') {
                        task.invoke();
                    }
                    rej(error);
                });
            }, function () {
                if (!supportAbort) {
                    rej('No AbortController supported, can not cancel fetch');
                    return;
                }
                if (signal && signal.abortController && !signal.aborted &&
                    typeof signal.abortController.abort === 'function' && abortNative) {
                    try {
                        Zone.current[fetchTaskAborting] = true;
                        abortNative.call(signal.abortController);
                    }
                    finally {
                        Zone.current[fetchTaskAborting] = false;
                    }
                }
                else {
                    rej('cancel fetch need a AbortController.signal');
                }
            });
            if (signal && signal.abortController) {
                signal.abortController.task = task;
            }
        });
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
var shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        var eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var eventName = arguments[0];
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            var ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget_1 = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget_1) {
            patchFilteredProperties(XMLHttpRequestEventTarget_1 && XMLHttpRequestEventTarget_1.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    var nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = targetName + "." + method + "::" + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    attachOriginToPatched(target[method], nativeDelegate);
}
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    patchCallbacks(document, 'Document', 'registerElement', callbacks);
}
function patchCustomElements(_global) {
    if ((!isBrowser && !isMix) || !('customElements' in _global)) {
        return;
    }
    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    patchCallbacks(_global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', function (global, Zone, api) {
    registerElementPatch(global);
    patchCustomElements(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget_1) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        var loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            var oriInvoke_1 = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                var loadTasks = target['__zone_symbol__loadfalse'];
                                for (var i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke_1.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_tresdetres_tresdetres_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tresdetres/tresdetres.component */ "./src/app/components/tresdetres/tresdetres.component.ts");
/* harmony import */ var _components_guawapp_guawapp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/guawapp/guawapp.component */ "./src/app/components/guawapp/guawapp.component.ts");
/* harmony import */ var _components_whittier_whittier_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/whittier/whittier.component */ "./src/app/components/whittier/whittier.component.ts");
/* harmony import */ var _components_ti_python_adapter_ti_python_adapter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ti-python-adapter/ti-python-adapter.component */ "./src/app/components/ti-python-adapter/ti-python-adapter.component.ts");
/* harmony import */ var _components_holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/holidayinn/holidayinn.component */ "./src/app/components/holidayinn/holidayinn.component.ts");
/* harmony import */ var _components_energy_management_energy_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/energy-management/energy-management.component */ "./src/app/components/energy-management/energy-management.component.ts");
/* harmony import */ var _components_beauty_tree_beauty_tree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/beauty-tree/beauty-tree.component */ "./src/app/components/beauty-tree/beauty-tree.component.ts");
/* harmony import */ var _components_iot_iot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/iot/iot.component */ "./src/app/components/iot/iot.component.ts");
/* harmony import */ var _components_tiinspire_tiinspire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tiinspire/tiinspire */ "./src/app/components/tiinspire/tiinspire.ts");













const routes = [
    { path: '', component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_1__["WorkComponent"] },
    { path: 'work', component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_1__["WorkComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'work/3de3', component: _components_tresdetres_tresdetres_component__WEBPACK_IMPORTED_MODULE_4__["TresDeTresComponent"] },
    { path: 'work/whittier', component: _components_whittier_whittier_component__WEBPACK_IMPORTED_MODULE_6__["WhittierComponent"] },
    { path: 'work/holiday', component: _components_holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_8__["HolidayComponent"] },
    { path: 'work/guawapp', component: _components_guawapp_guawapp_component__WEBPACK_IMPORTED_MODULE_5__["GuawappComponent"] },
    { path: 'work/ti-python-adapter', component: _components_ti_python_adapter_ti_python_adapter_component__WEBPACK_IMPORTED_MODULE_7__["TIPythonAdapterComponent"] },
    { path: 'work/energy-management', component: _components_energy_management_energy_management_component__WEBPACK_IMPORTED_MODULE_9__["EnergyManagementComponent"] },
    { path: 'work/beauty-tree', component: _components_beauty_tree_beauty_tree_component__WEBPACK_IMPORTED_MODULE_10__["BeautyTreeComponent"] },
    { path: 'work/iot', component: _components_iot_iot_component__WEBPACK_IMPORTED_MODULE_11__["IOTComponent"] },
    { path: 'work/tiinspire', component: _components_tiinspire_tiinspire__WEBPACK_IMPORTED_MODULE_12__["TIInspireComponent"] }
];
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _components_work_work_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/work/work.component.ngfactory */ "./src/app/components/work/work.component.ngfactory.js");
/* harmony import */ var _components_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component.ngfactory */ "./src/app/components/about/about.component.ngfactory.js");
/* harmony import */ var _components_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component.ngfactory */ "./src/app/components/contact/contact.component.ngfactory.js");
/* harmony import */ var _components_tresdetres_tresdetres_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tresdetres/tresdetres.component.ngfactory */ "./src/app/components/tresdetres/tresdetres.component.ngfactory.js");
/* harmony import */ var _components_whittier_whittier_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/whittier/whittier.component.ngfactory */ "./src/app/components/whittier/whittier.component.ngfactory.js");
/* harmony import */ var _components_holidayinn_holidayinn_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/holidayinn/holidayinn.component.ngfactory */ "./src/app/components/holidayinn/holidayinn.component.ngfactory.js");
/* harmony import */ var _components_guawapp_guawapp_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/guawapp/guawapp.component.ngfactory */ "./src/app/components/guawapp/guawapp.component.ngfactory.js");
/* harmony import */ var _components_ti_python_adapter_ti_python_adapter_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ti-python-adapter/ti-python-adapter.component.ngfactory */ "./src/app/components/ti-python-adapter/ti-python-adapter.component.ngfactory.js");
/* harmony import */ var _components_energy_management_energy_management_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/energy-management/energy-management.component.ngfactory */ "./src/app/components/energy-management/energy-management.component.ngfactory.js");
/* harmony import */ var _components_beauty_tree_beauty_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/beauty-tree/beauty-tree.component.ngfactory */ "./src/app/components/beauty-tree/beauty-tree.component.ngfactory.js");
/* harmony import */ var _components_iot_iot_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/iot/iot.component.ngfactory */ "./src/app/components/iot/iot.component.ngfactory.js");
/* harmony import */ var _components_tiinspire_tiinspire_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tiinspire/tiinspire.ngfactory */ "./src/app/components/tiinspire/tiinspire.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/@angular/material/datepicker/typings/index.ngfactory */ "./node_modules/@angular/material/datepicker/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var _components_app_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/app.component.ngfactory */ "./src/app/components/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/work/work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_tresdetres_tresdetres_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/tresdetres/tresdetres.component */ "./src/app/components/tresdetres/tresdetres.component.ts");
/* harmony import */ var _components_whittier_whittier_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/whittier/whittier.component */ "./src/app/components/whittier/whittier.component.ts");
/* harmony import */ var _components_holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/holidayinn/holidayinn.component */ "./src/app/components/holidayinn/holidayinn.component.ts");
/* harmony import */ var _components_guawapp_guawapp_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/guawapp/guawapp.component */ "./src/app/components/guawapp/guawapp.component.ts");
/* harmony import */ var _components_ti_python_adapter_ti_python_adapter_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/ti-python-adapter/ti-python-adapter.component */ "./src/app/components/ti-python-adapter/ti-python-adapter.component.ts");
/* harmony import */ var _components_energy_management_energy_management_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/energy-management/energy-management.component */ "./src/app/components/energy-management/energy-management.component.ts");
/* harmony import */ var _components_beauty_tree_beauty_tree_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/beauty-tree/beauty-tree.component */ "./src/app/components/beauty-tree/beauty-tree.component.ts");
/* harmony import */ var _components_iot_iot_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/iot/iot.component */ "./src/app/components/iot/iot.component.ts");
/* harmony import */ var _components_tiinspire_tiinspire__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/tiinspire/tiinspire */ "./src/app/components/tiinspire/tiinspire.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm2015/grid.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_components_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _components_work_work_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["WorkComponentNgFactory"], _components_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AboutComponentNgFactory"], _components_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ContactComponentNgFactory"], _components_tresdetres_tresdetres_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TresDeTresComponentNgFactory"], _components_whittier_whittier_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["WhittierComponentNgFactory"], _components_holidayinn_holidayinn_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["HolidayComponentNgFactory"], _components_guawapp_guawapp_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["GuawappComponentNgFactory"], _components_ti_python_adapter_ti_python_adapter_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["TIPythonAdapterComponentNgFactory"], _components_energy_management_energy_management_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["EnergyManagementComponentNgFactory"], _components_beauty_tree_beauty_tree_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["BeautyTreeComponentNgFactory"], _components_iot_iot_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["IOTComponentNgFactory"], _components_tiinspire_tiinspire_ngfactory__WEBPACK_IMPORTED_MODULE_15__["TIInspireComponentNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["TooltipComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_19__["BsDropdownContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_19__["ModalBackdropComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_19__["ModalContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_19__["TooltipContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_19__["PopoverContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_19__["MdbTablePaginationComponentNgFactory"], _components_app_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_24__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_24__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_24__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_24__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_24__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_24__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_26__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_26__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_26__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_26__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) { return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["removeStyles"](p1_0, p1_1)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_28__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["NavbarService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["NavbarService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CarouselConfig"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CarouselConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_40__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_40__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MdbTableService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MdbTableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ɵf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ɵf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ɵe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ɵf"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["BsDropdownState"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBModalService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBModalService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ɵe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["TooltipConfig"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["TooltipConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["PopoverConfig"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["PopoverConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_sidenav_service__WEBPACK_IMPORTED_MODULE_41__["SidenavService"], _services_sidenav_service__WEBPACK_IMPORTED_MODULE_41__["SidenavService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_26__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_21__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_21__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTES"], function () { return [[{ path: "", component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_42__["WorkComponent"] }, { path: "work", component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_42__["WorkComponent"] }, { path: "about", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_43__["AboutComponent"] }, { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_44__["ContactComponent"] }, { path: "work/3de3", component: _components_tresdetres_tresdetres_component__WEBPACK_IMPORTED_MODULE_45__["TresDeTresComponent"] }, { path: "work/whittier", component: _components_whittier_whittier_component__WEBPACK_IMPORTED_MODULE_46__["WhittierComponent"] }, { path: "work/holiday", component: _components_holidayinn_holidayinn_component__WEBPACK_IMPORTED_MODULE_47__["HolidayComponent"] }, { path: "work/guawapp", component: _components_guawapp_guawapp_component__WEBPACK_IMPORTED_MODULE_48__["GuawappComponent"] }, { path: "work/ti-python-adapter", component: _components_ti_python_adapter_ti_python_adapter_component__WEBPACK_IMPORTED_MODULE_49__["TIPythonAdapterComponent"] }, { path: "work/energy-management", component: _components_energy_management_energy_management_component__WEBPACK_IMPORTED_MODULE_50__["EnergyManagementComponent"] }, { path: "work/beauty-tree", component: _components_beauty_tree_beauty_tree_component__WEBPACK_IMPORTED_MODULE_51__["BeautyTreeComponent"] }, { path: "work/iot", component: _components_iot_iot_component__WEBPACK_IMPORTED_MODULE_52__["IOTComponent"] }, { path: "work/tiinspire", component: _components_tiinspire_tiinspire__WEBPACK_IMPORTED_MODULE_53__["TIInspireComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_26__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_54__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_54__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_55__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_55__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__["MatButtonToggleModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_56__["MatButtonToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_57__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_58__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_60__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_60__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_61__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_61__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_64__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_64__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_65__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_65__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_66__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_66__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_35__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_67__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_67__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_68__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_68__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_69__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_69__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_70__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_70__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_71__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_71__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_72__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_72__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_73__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_73__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_74__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_74__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_75__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_75__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["WavesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["InputsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["NavbarModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["NavbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["DropdownModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ChartsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CollapseModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ModalModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["TooltipModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["PopoverModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["PopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["IconsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["IconsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CardsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CardsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_40__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_40__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_40__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_40__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CheckboxModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["CheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["TableModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["TableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["BadgeModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["BadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["BreadcrumbModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["BreadcrumbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["InputUtilitiesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["StickyHeaderModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["StickyHeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBRootModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBRootModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["BsDropdownConfig"], { autoClose: true }, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);




class AppModule {
}


/***/ }),

/***/ "./src/app/components/about/about.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/components/about/about.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function() { return RenderType_AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function() { return View_AboutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function() { return View_AboutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function() { return AboutComponentNgFactory; });
/* harmony import */ var _about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.scss.shim.ngstyle */ "./src/app/components/about/about.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/components/about/about.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_AboutComponent = [_about_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutComponent, data: { "animation": [{ type: 7, name: "flyInOut", definitions: [{ type: 0, name: "in", styles: { type: 6, styles: { transform: "translateY(0)" }, offset: null }, options: undefined }, { type: 1, expr: "void => *", animation: [{ type: 6, styles: { transform: "translateY(-100%)" }, offset: null }, { type: 4, styles: null, timings: 200 }], options: null }, { type: 1, expr: "* => void", animation: [{ type: 4, styles: { type: 6, styles: { transform: "translateY(100%)" }, offset: null }, timings: 500 }], options: null }], options: {} }] } });

function View_AboutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 140, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "top-container"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "about-picture"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "img-fluid z-depth-1 rounded-circle profile-picture"], ["src", "../../assets/ProfilePictureSquare.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h2", [["class", "profession-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mari Kurata, UI/UX Designer "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 130, "div", [["class", "about-me-part2"], ["fxLayout", "column"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [["class", "about-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My skills"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 70, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 69, "div", [["class", "row "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 14, "div", [["class", "col mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 13, "div", [["class", "card h-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 12, "div", [["class", "view overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "img", [["alt", "Card image cap"], ["class", "card-img-top skills-icon"], ["src", "../../assets/About-icons/Design Skills Icon_DesignStrategy.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "h4", [["class", "skill-card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["PRODUCT STRATEGY"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Analyzing Business Goals"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Requirement Gatherning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Analyzing Product"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 17, "div", [["class", "col mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 16, "div", [["class", "card h-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 15, "div", [["class", "view overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "img", [["alt", "Card image cap"], ["class", "card-img-top skills-icon"], ["src", "../../assets/About-icons/Design Skills Icon_InteractionDesign.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "h4", [["class", "skill-card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["INTERACTION DESIGN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Persona Development"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User Journey"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["UX Information Architecture"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Wireframes & Mockups"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 17, "div", [["class", "col mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 16, "div", [["class", "card h-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 15, "div", [["class", "view overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 0, "img", [["alt", "Card image cap"], ["class", "card-img-top skills-icon"], ["src", "../../assets/About-icons/Design Skills Icon_VisualDesign.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "h4", [["class", "skill-card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["VISUAL DESIGN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Interface Design"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Iconography"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SVG"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Images"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 17, "div", [["class", "col mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 16, "div", [["class", "card h-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 15, "div", [["class", "view overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 0, "img", [["alt", "Card image cap"], ["class", "card-img-top skills-icon"], ["src", "../../assets/About-icons/Design Skills Icon_UserResarch.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "h4", [["class", "skill-card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["USABILITY EVALUATION"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User testing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["User Inquiry"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Heuristic Evaluation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "p", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["UI / UX Best Practices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 1, "p", [["class", "about-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Top 3 Goals"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 15, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 4, "p", [["class", "goals-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1. Create intuitive, simple and "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 1, "span", [["style", "color:#573EFB; font-weight: 600; font-size: 1.3em;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["valuable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" user experience."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 4, "p", [["class", "goals-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2. Design to "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 1, "span", [["style", "color:#29BCC8; font-weight: 600; font-size: 1.3em;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["influence"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" how world works."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 4, "p", [["class", "goals-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3. Asist "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "span", [["style", "color:#0076FF; font-weight: 600; font-size: 1.3em;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["multidisciplinary"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" teams to push the boundaries of the technology."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 13, "div", [["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "center center"], ["style", "padding-top: 50px; padding-bottom: 20px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 1, "p", [["class", "interest-tile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Interests:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 8, "div", [["class", "intest-text-background"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 1, "p", [["class", "interest-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["IoT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "p", [["class", "interest-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Health Care"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 1, "p", [["class", "interest-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Education"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "p", [["class", "about-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hobbies"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around center"], ["style", "margin-bottom: 100px; width: 600px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](122, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center cernter"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "hobby-icon"], ["src", "../../assets/Hobbies illustrator-03.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 1, "p", [["class", "hobbie-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Swimming"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center cernter"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](131, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "hobby-icon"], ["src", "../../assets/Hobbies illustrator-01.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 1, "p", [["class", "hobbie-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Zumba"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center cernter"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 0, "img", [["alt", "Responsive image"], ["class", "hobby-icon"], ["src", "../../assets/Hobbies illustrator-02.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 1, "p", [["class", "hobbie-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Beading"]))], function (_ck, _v) { var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "column"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "center center"; _ck(_v, 5, 0, currVal_3); var currVal_4 = "column"; _ck(_v, 11, 0, currVal_4); var currVal_5 = "start center"; _ck(_v, 12, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 105, 0, currVal_6, currVal_7); var currVal_8 = "center center"; _ck(_v, 106, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 110, 0, currVal_9); var currVal_10 = "center center"; _ck(_v, 111, 0, currVal_10); var currVal_11 = "row"; _ck(_v, 121, 0, currVal_11); var currVal_12 = "space-around center"; _ck(_v, 122, 0, currVal_12); var currVal_13 = "column"; _ck(_v, 124, 0, currVal_13); var currVal_14 = "center cernter"; _ck(_v, 125, 0, currVal_14); var currVal_15 = "column"; _ck(_v, 130, 0, currVal_15); var currVal_16 = "center cernter"; _ck(_v, 131, 0, currVal_16); var currVal_17 = "column"; _ck(_v, 136, 0, currVal_17); var currVal_18 = "center cernter"; _ck(_v, 137, 0, currVal_18); }, null); }
function View_AboutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AboutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("about", _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/about/about.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/components/about/about.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".about-picture[_ngcontent-%COMP%] {\n  position: center;\n  width: 200px;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%; }\n\n.top-container[_ngcontent-%COMP%] {\n  background-image: url('AboutMeTopImage.png');\n  height: 400px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center; }\n\n.profession-title[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  color: #254E7E;\n  font-weight: 400;\n  font-size: 2em;\n  line-height: 1;\n  text-align: center; }\n\n.about-me-part2[_ngcontent-%COMP%] {\n  background-color: F8F8F8;\n  height: 500px; }\n\n.about-subtitle[_ngcontent-%COMP%] {\n  color: #254E7E;\n  font-weight: 300;\n  font-size: 1.5em;\n  text-align: center;\n  text-decoration: underline;\n  margin-bottom: 50px;\n  margin-top: 50px; }\n\n.the-best-myself1[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  text-align: center;\n  font-weight: 300; }\n\n.the-best-myself2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  text-align: center;\n  font-weight: 400;\n  color: #254E7E; }\n\n.hobby-icon[_ngcontent-%COMP%] {\n  position: center;\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.hobbie-text[_ngcontent-%COMP%] {\n  text-align: center; }\n\n.skills-container[_ngcontent-%COMP%] {\n  margin: 30px; }\n\n.skills-icon[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  margin-bottom: 30px; }\n\n.skill-card-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1em;\n  color: #254E7E;\n  text-align: center;\n  line-height: 1.6;\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.skill-card-text[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%; }\n\n.goals-text[_ngcontent-%COMP%] {\n  font-weight: 200;\n  font-size: 1.5em;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.interest-tile[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro';\n  color: #254E7E;\n  font-weight: 700;\n  font-size: 3em;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.interest-text[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro';\n  color: #0076FF;\n  font-weight: 400;\n  font-size: 1.5em; }\n\n.intest-text-background[_ngcontent-%COMP%] {\n  background-image: url('interests-background.png');\n  width: 417px;\n  height: 253px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWN0b3IvRG9jdW1lbnRzL3BvcnRmb2xpby9raW1pX3BvcnRmb2xpby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixjQUFhO0VBQ2IscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSw2Q0FBZ0Q7RUFDaEQsY0FBYTtFQUNiLFlBQVc7RUFDWCw2QkFBNEI7RUFDNUIsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0kseUJBQXdCO0VBQ3hCLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsMkJBQTBCO0VBQzFCLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLGFBQVk7RUFDWixxQkFBaUI7S0FBakIsa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUNEO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDZixlQUFjO0VBQ2QsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDdEI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsWUFBVyxFQUNkOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0MsK0JBQThCO0VBQzlCLGVBQWE7RUFDYixpQkFBZ0I7RUFDaEIsZUFBYztFQUNYLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDQywrQkFBOEI7RUFDOUIsZUFBYTtFQUNiLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDaEI7O0FBQ0Q7RUFDQyxrREFBcUQ7RUFDckQsYUFBWTtFQUNaLGNBQVk7RUFDWixxQkFBaUI7S0FBakIsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtcGljdHVyZSB7XG4gICAgcG9zaXRpb246IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udG9wLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvQWJvdXRNZVRvcEltYWdlLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZmVzc2lvbi10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyBcbiAgICBjb2xvcjogIzI1NEU3RTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMmVtOyAgIFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dC1tZS1wYXJ0MntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBGOEY4Rjg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cbi5hYm91dC1zdWJ0aXRsZXtcbiAgICBjb2xvcjogIzI1NEU3RTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07ICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi50aGUtYmVzdC1teXNlbGYxe1xuICAgIGZvbnQtc2l6ZTogMS41ZW07ICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4udGhlLWJlc3QtbXlzZWxmMntcbiAgICBmb250LXNpemU6IDEuNWVtOyAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMjU0RTdFO1xufVxuLmhvYmJ5LWljb257XG4gICAgcG9zaXRpb246IGNlbnRlcjtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uaG9iYmllLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2tpbGxzLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDMwcHg7XG59XG4uc2tpbGxzLWljb257XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5za2lsbC1jYXJkLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICBjb2xvcjogIzI1NEU3RTtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICB3aWR0aDogMjAwcHg7XG4gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc2tpbGwtY2FyZC10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZ29hbHMtdGV4dHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uaW50ZXJlc3QtdGlsZXtcblx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nO1xuXHRjb2xvcjojMjU0RTdFO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRmb250LXNpemU6IDNlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5pbnRlcmVzdC10ZXh0e1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyc7XG5cdGNvbG9yOiMwMDc2RkY7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMS41ZW07XG59XG4uaW50ZXN0LXRleHQtYmFja2dyb3VuZHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL2ludGVyZXN0cy1iYWNrZ3JvdW5kLnBuZ1wiKTtcblx0d2lkdGg6IDQxN3B4O1xuXHRoZWlnaHQ6MjUzcHg7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"];



/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class AboutComponent {
    constructor() {
        this.show = true;
        this.finalWords = ['a'];
        this.interval = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(6000);
        this.interval.subscribe(x => {
            this.restartText();
        });
    }
    ngOnInit() {
    }
    restartText() {
        let adjectives = ['UX Design', 'mexican', 'friend'];
        this.finalWords.pop();
        let selectedWord = adjectives[Math.floor(Math.random() * adjectives.length)];
        this.finalWords.push(selectedWord);
    }
}


/***/ }),

/***/ "./src/app/components/app.component.ngfactory.js":
/*!*******************************************************!*\
  !*** ./src/app/components/app.component.ngfactory.js ***!
  \*******************************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/components/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidenav_sidenav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav/sidenav.component.ngfactory */ "./src/app/components/sidenav/sidenav.component.ngfactory.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sidenav", [], null, null, null, _sidenav_sidenav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SidenavComponent_0"], _sidenav_sidenav_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SidenavComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "footer"], ["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 3, 0); var currVal_0 = "row"; _ck(_v, 5, 0, currVal_0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/app.component.scss.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/components/app.component.scss.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".footer[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 100%;\n  background-color: #7DA7AC; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWN0b3IvRG9jdW1lbnRzL3BvcnRmb2xpby9raW1pX3BvcnRmb2xpby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixZQUFXO0VBQ1gsMEJBQXdCLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3REE3QUM7XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}


/***/ }),

/***/ "./src/app/components/beauty-tree/beauty-tree.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/beauty-tree/beauty-tree.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_BeautyTreeComponent, View_BeautyTreeComponent_0, View_BeautyTreeComponent_Host_0, BeautyTreeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BeautyTreeComponent", function() { return RenderType_BeautyTreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BeautyTreeComponent_0", function() { return View_BeautyTreeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BeautyTreeComponent_Host_0", function() { return View_BeautyTreeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyTreeComponentNgFactory", function() { return BeautyTreeComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _beauty_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beauty-tree.component */ "./src/app/components/beauty-tree/beauty-tree.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_BeautyTreeComponent = [];
var RenderType_BeautyTreeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_BeautyTreeComponent, data: {} });

function View_BeautyTreeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_BeautyTreeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_BeautyTreeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/beautytree.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BeautyTreeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BeautyTreeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90%"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 10, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 15, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 19, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 29, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 36, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 37, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 38, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 43, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 24, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 34, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 48, 0, currVal_20); }); }
function View_BeautyTreeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "beauty-tree", [], null, null, null, View_BeautyTreeComponent_0, RenderType_BeautyTreeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _beauty_tree_component__WEBPACK_IMPORTED_MODULE_4__["BeautyTreeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BeautyTreeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("beauty-tree", _beauty_tree_component__WEBPACK_IMPORTED_MODULE_4__["BeautyTreeComponent"], View_BeautyTreeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/beauty-tree/beauty-tree.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/beauty-tree/beauty-tree.component.ts ***!
  \*****************************************************************/
/*! exports provided: BeautyTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyTreeComponent", function() { return BeautyTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class BeautyTreeComponent {
    ngAfterViewInit() {
    }
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[6];
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/contact/contact.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact/contact.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function() { return RenderType_ContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function() { return View_ContactComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function() { return View_ContactComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function() { return ContactComponentNgFactory; });
/* harmony import */ var _contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.scss.shim.ngstyle */ "./src/app/components/contact/contact.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/contact/contact.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ContactComponent = [_contact_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactComponent, data: {} });

function View_ContactComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 43, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 12, "div", [["class", "topBackground"], ["fxLayout", "row"], ["ngClass.gt-xs", "topBackground-gt-xs"], ["ngClass.xs", "topBackground-xs"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], [8, null]], { "ngClass.xs": [0, "ngClass.xs"], "ngClass.gt-xs": [1, "ngClass.gt-xs"], klass: [2, "klass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "div", [["fxFlex", "33%"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "titleContainer"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [["class", "contactTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Let's have"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [["class", "contactTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["a chat."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 27, "div", [["class", "contactBackground"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 10, "div", [["class", "contactInfoSection"], ["fxFlex", "33%"], ["fxFlex.lt-sm", "100%"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "a", [["href", "mailto:marikimi.kuratahdz@gmail.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, ":svg:svg", [[":xmlns:xlink", "http://www.w3.org/1999/xlink"], ["class", "contactIcon"], ["fill", "#7da7ac"], ["height", "102px"], ["version", "1.1"], ["viewBox", "0 0 134 102"], ["width", "134px"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, ":svg:path", [["d", "M122.222656,0 L11.7773438,0 C5.29142969,0 0,5.28203077 0,11.7692308 L0,90.2307692 C0,96.696 5.267875,102 11.7773438,102 L122.222656,102 C128.692344,102 134,96.7357538 134,90.2307692 L134,11.7692308 C134,5.304 128.732125,0 122.222656,0 Z M120.596336,7.84615385 L67.2496797,61.1563231 L13.4416133,7.84615385 L120.596336,7.84615385 Z M7.8515625,88.6060923 L7.8515625,13.3565077 L45.6644258,50.8192769 L7.8515625,88.6060923 Z M13.4034023,94.1538462 L51.240082,56.3432308 L64.4979687,69.4782154 C66.0326875,70.9988 68.509332,70.9938308 70.0377695,69.4661846 L82.9648437,56.5480154 L120.596598,94.1538462 L13.4034023,94.1538462 Z M126.148437,88.6058308 L88.5166836,51 L126.148437,13.3939077 L126.148437,88.6058308 Z"], ["id", "Shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "p", [["class", "iconText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email me at"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "a", [["class", "linkText"], ["href", "mailto:marikimi.kuratahdz@gmail.com"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["marikimi.kuratahdz@gmail.com"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "p", [["class", "or-separator"], ["fxFlex", "10%"], ["fxFlex.lt-sm", "100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["or"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 10, "div", [["class", "contactInfoSection"], ["fxFlex", "33%"], ["fxFlex.lt-sm", "100%"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 2, "a", [["href", "https://www.linkedin.com/in/mari-kurata-a6954356"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, ":svg:svg", [[":xmlns:xlink", "http://www.w3.org/1999/xlink"], ["class", "contactIcon"], ["fill", "#7da7ac"], ["height", "109px"], ["version", "1.1"], ["viewBox", "0 0 109 109"], ["width", "109px"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, ":svg:path", [["d", "M34.0641631,90.0527344 L19.1618194,90.0527344 L19.1618194,41.9394531 L34.0641631,41.9394531 L34.0641631,90.0527344 Z M35.5510713,26.6104966 C35.5510713,21.7930146 31.6425322,17.8828125 26.8275452,17.8828125 C21.9942627,17.8828125 18.0957031,21.7930146 18.0957031,26.6104966 C18.0957031,31.4296416 21.9942627,35.3398437 26.8275452,35.3398437 C31.6425322,35.3398437 35.5510713,31.4296416 35.5510713,26.6104966 Z M89.8398438,63.5827788 C89.8398438,50.6671372 87.1113511,41.0878906 72.0235596,41.0878906 C64.7736358,41.0878906 59.9070893,44.7136841 57.9203872,48.4841767 L57.90625,48.4841767 L57.90625,41.9394531 L43.4296875,41.9394531 L43.4296875,90.0527344 L57.90625,90.0527344 L57.90625,66.1640777 C57.90625,59.9079209 59.4987717,53.8471909 67.253479,53.8471909 C74.9025727,53.8471909 75.1503906,61.00148 75.1503906,66.5615845 L75.1503906,90.0527344 L89.8398438,90.0527344 L89.8398438,63.5827788 Z M109,96.2265625 L109,12.7734375 C109,5.72975148 103.270249,0 96.2265625,0 L12.7734375,0 C5.72975148,0 0,5.72975148 0,12.7734375 L0,96.2265625 C0,103.270249 5.72975148,109 12.7734375,109 L96.2265625,109 C103.270249,109 109,103.270249 109,96.2265625 Z M96.2265625,8.515625 C98.5741807,8.515625 100.484375,10.4258193 100.484375,12.7734375 L100.484375,96.2265625 C100.484375,98.5741807 98.5741807,100.484375 96.2265625,100.484375 L12.7734375,100.484375 C10.4258193,100.484375 8.515625,98.5741807 8.515625,96.2265625 L8.515625,12.7734375 C8.515625,10.4258193 10.4258193,8.515625 12.7734375,8.515625 L96.2265625,8.515625 Z"], ["id", "Shape"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "p", [["class", "iconText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Connect with me"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "a", [["class", "linkText"], ["href", "https://www.linkedin.com/in/mari-kurata-a6954356"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Mari Kurata"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "div", [], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "column"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "row"; _ck(_v, 3, 0, currVal_1); var currVal_2 = "topBackground-xs"; var currVal_3 = "topBackground-gt-xs"; var currVal_4 = "topBackground"; _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4); var currVal_5 = "33%"; var currVal_6 = "100%"; _ck(_v, 7, 0, currVal_5, currVal_6); var currVal_7 = "column"; _ck(_v, 9, 0, currVal_7); var currVal_8 = "center center"; _ck(_v, 10, 0, currVal_8); var currVal_9 = "row"; var currVal_10 = "column"; _ck(_v, 16, 0, currVal_9, currVal_10); var currVal_11 = "center center"; _ck(_v, 17, 0, currVal_11); var currVal_12 = "column"; _ck(_v, 19, 0, currVal_12); var currVal_13 = "center center"; _ck(_v, 20, 0, currVal_13); var currVal_14 = "33%"; var currVal_15 = "100%"; _ck(_v, 21, 0, currVal_14, currVal_15); var currVal_16 = "10%"; var currVal_17 = "100%"; _ck(_v, 30, 0, currVal_16, currVal_17); var currVal_18 = "column"; _ck(_v, 33, 0, currVal_18); var currVal_19 = "center center"; _ck(_v, 34, 0, currVal_19); var currVal_20 = "33%"; var currVal_21 = "100%"; _ck(_v, 35, 0, currVal_20, currVal_21); }, null); }
function View_ContactComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("contact", _contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".topBackground[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left; }\n\n.topBackground-gt-xs[_ngcontent-%COMP%] {\n  height: 290px;\n  background-image: url('ContactBackgroundNoHeels3.jpg'); }\n\n.topBackground-xs[_ngcontent-%COMP%] {\n  height: 500px;\n  background-image: url('ContactBackgroundNoHeels.jpg'); }\n\n.titleContainer[_ngcontent-%COMP%] {\n  height: 60%; }\n\n.contactTitle[_ngcontent-%COMP%] {\n  color: #254E7E;\n  font-weight: 700;\n  font-size: 3em;\n  line-height: 1;\n  text-align: center; }\n\n.or-separator[_ngcontent-%COMP%] {\n  color: #254E7E;\n  font-weight: 400;\n  font-size: 3em;\n  text-align: center;\n  margin-bottom: 50px; }\n\n.contactBackground[_ngcontent-%COMP%] {\n  height: 300px;\n  background-image: linear-gradient(270deg, #fcfcfc 25%, #f5f5f5 62%, #ffffff 94%); }\n\n.contactInfoSection[_ngcontent-%COMP%] {\n  height: 100%; }\n\n.contactIcon[_ngcontent-%COMP%] {\n  margin-bottom: 20px; }\n\n.iconText[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 28px;\n  color: #254E7E;\n  text-align: center; }\n\n.linkText[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  color: #000000;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWN0b3IvRG9jdW1lbnRzL3BvcnRmb2xpby9raW1pX3BvcnRmb2xpby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE0QjtFQUM1Qix1QkFBc0I7RUFDdEIsMEJBQTBCLEVBQzdCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLHVEQUEwRCxFQUM3RDs7QUFFRDtFQUNJLGNBQWE7RUFDYixzREFBeUQsRUFDNUQ7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksZUFBYztFQUNkLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGNBQWE7RUFDYixpRkFBZ0YsRUFDbkY7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcEJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDtcbn1cbi50b3BCYWNrZ3JvdW5kLWd0LXhzIHtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9Db250YWN0QmFja2dyb3VuZE5vSGVlbHMzLmpwZ1wiKTtcbn1cblxuLnRvcEJhY2tncm91bmQteHMge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0NvbnRhY3RCYWNrZ3JvdW5kTm9IZWVscy5qcGdcIik7XG59XG5cbi50aXRsZUNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDYwJTtcbn1cbi5jb250YWN0VGl0bGV7XG4gICAgY29sb3I6ICMyNTRFN0U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDNlbTsgICBcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3Itc2VwYXJhdG9ye1xuICAgIGNvbG9yOiAjMjU0RTdFO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAzZW07ICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uY29udGFjdEJhY2tncm91bmR7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmNmY2ZjIDI1JSwgI2Y1ZjVmNSA2MiUsICNmZmZmZmYgOTQlKTtcbn1cbi5jb250YWN0SW5mb1NlY3Rpb257XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhY3RJY29ue1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaWNvblRleHR7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgY29sb3I6ICMyNTRFN0U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpbmtUZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class ContactComponent {
    constructor() {
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/energy-management/energy-management.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/components/energy-management/energy-management.component.ngfactory.js ***!
  \***************************************************************************************/
/*! exports provided: RenderType_EnergyManagementComponent, View_EnergyManagementComponent_0, View_EnergyManagementComponent_Host_0, EnergyManagementComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EnergyManagementComponent", function() { return RenderType_EnergyManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EnergyManagementComponent_0", function() { return View_EnergyManagementComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EnergyManagementComponent_Host_0", function() { return View_EnergyManagementComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyManagementComponentNgFactory", function() { return EnergyManagementComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _energy_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./energy-management.component */ "./src/app/components/energy-management/energy-management.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_EnergyManagementComponent = [];
var RenderType_EnergyManagementComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_EnergyManagementComponent, data: {} });

function View_EnergyManagementComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_EnergyManagementComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_EnergyManagementComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/energyman.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EnergyManagementComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_EnergyManagementComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90%"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 10, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 15, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 19, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 29, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 36, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 37, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 38, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 43, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 24, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 34, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 48, 0, currVal_20); }); }
function View_EnergyManagementComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "energy-management", [], null, null, null, View_EnergyManagementComponent_0, RenderType_EnergyManagementComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _energy_management_component__WEBPACK_IMPORTED_MODULE_4__["EnergyManagementComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EnergyManagementComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("energy-management", _energy_management_component__WEBPACK_IMPORTED_MODULE_4__["EnergyManagementComponent"], View_EnergyManagementComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/energy-management/energy-management.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/energy-management/energy-management.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EnergyManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyManagementComponent", function() { return EnergyManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class EnergyManagementComponent {
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[5];
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/guawapp/guawapp.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/guawapp/guawapp.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_GuawappComponent, View_GuawappComponent_0, View_GuawappComponent_Host_0, GuawappComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GuawappComponent", function() { return RenderType_GuawappComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GuawappComponent_0", function() { return View_GuawappComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GuawappComponent_Host_0", function() { return View_GuawappComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuawappComponentNgFactory", function() { return GuawappComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _guawapp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guawapp.component */ "./src/app/components/guawapp/guawapp.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_GuawappComponent = [];
var RenderType_GuawappComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_GuawappComponent, data: {} });

function View_GuawappComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_GuawappComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_GuawappComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/guawapp.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GuawappComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_GuawappComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90%"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 10, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 15, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 19, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 29, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 36, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 37, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 38, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 43, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 24, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 34, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 48, 0, currVal_20); }); }
function View_GuawappComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "guawapp", [], null, null, null, View_GuawappComponent_0, RenderType_GuawappComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _guawapp_component__WEBPACK_IMPORTED_MODULE_4__["GuawappComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GuawappComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("guawapp", _guawapp_component__WEBPACK_IMPORTED_MODULE_4__["GuawappComponent"], View_GuawappComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/guawapp/guawapp.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/guawapp/guawapp.component.ts ***!
  \*********************************************************/
/*! exports provided: GuawappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuawappComponent", function() { return GuawappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class GuawappComponent {
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[7];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}


/***/ }),

/***/ "./src/app/components/holidayinn/holidayinn.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/holidayinn/holidayinn.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_HolidayComponent, View_HolidayComponent_0, View_HolidayComponent_Host_0, HolidayComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HolidayComponent", function() { return RenderType_HolidayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HolidayComponent_0", function() { return View_HolidayComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HolidayComponent_Host_0", function() { return View_HolidayComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayComponentNgFactory", function() { return HolidayComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _holidayinn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./holidayinn.component */ "./src/app/components/holidayinn/holidayinn.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_HolidayComponent = [];
var RenderType_HolidayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_HolidayComponent, data: {} });

function View_HolidayComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_HolidayComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_HolidayComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "div", [["fxFlex", "90"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/holiday_inn/1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/holiday_inn/2.gif"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/holiday_inn/3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HolidayComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_HolidayComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](50, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 9, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 10, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 12, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 16, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 17, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 19, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 20, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 21, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 31, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 38, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 39, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 40, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 45, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 26, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 36, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 50, 0, currVal_20); }); }
function View_HolidayComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "holidayinn", [], null, null, null, View_HolidayComponent_0, RenderType_HolidayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _holidayinn_component__WEBPACK_IMPORTED_MODULE_4__["HolidayComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HolidayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("holidayinn", _holidayinn_component__WEBPACK_IMPORTED_MODULE_4__["HolidayComponent"], View_HolidayComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/holidayinn/holidayinn.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/holidayinn/holidayinn.component.ts ***!
  \***************************************************************/
/*! exports provided: HolidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayComponent", function() { return HolidayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class HolidayComponent {
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[3];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}


/***/ }),

/***/ "./src/app/components/iot/iot.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/components/iot/iot.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_IOTComponent, View_IOTComponent_0, View_IOTComponent_Host_0, IOTComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IOTComponent", function() { return RenderType_IOTComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IOTComponent_0", function() { return View_IOTComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IOTComponent_Host_0", function() { return View_IOTComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOTComponentNgFactory", function() { return IOTComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iot.component */ "./src/app/components/iot/iot.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_IOTComponent = [];
var RenderType_IOTComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_IOTComponent, data: {} });

function View_IOTComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_IOTComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_IOTComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 4, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/iot-energy-meter/1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/iot-energy-meter/2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/iot-energy-meter/3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](20, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](26, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IOTComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](36, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_IOTComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](50, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90%"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 9, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 10, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 12, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 16, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 17, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 19, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 20, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 21, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 31, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 38, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 39, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 40, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 45, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 26, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 36, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 50, 0, currVal_20); }); }
function View_IOTComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "iot", [], null, null, null, View_IOTComponent_0, RenderType_IOTComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _iot_component__WEBPACK_IMPORTED_MODULE_4__["IOTComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IOTComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("iot", _iot_component__WEBPACK_IMPORTED_MODULE_4__["IOTComponent"], View_IOTComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/iot/iot.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/iot/iot.component.ts ***!
  \*************************************************/
/*! exports provided: IOTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOTComponent", function() { return IOTComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class IOTComponent {
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[4];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}


/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ngfactory.js":
/*!*******************************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ngfactory.js ***!
  \*******************************************************************/
/*! exports provided: RenderType_SidenavComponent, View_SidenavComponent_0, View_SidenavComponent_Host_0, SidenavComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SidenavComponent", function() { return RenderType_SidenavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SidenavComponent_0", function() { return View_SidenavComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SidenavComponent_Host_0", function() { return View_SidenavComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponentNgFactory", function() { return SidenavComponentNgFactory; });
/* harmony import */ var _sidenav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav.component.scss.shim.ngstyle */ "./src/app/components/sidenav/sidenav.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sidenav/typings/index.ngfactory */ "./node_modules/@angular/material/sidenav/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/list/typings/index.ngfactory */ "./node_modules/@angular/material/list/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























var styles_SidenavComponent = [_sidenav_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SidenavComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SidenavComponent, data: {} });

function View_SidenavComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "mat-toolbar-row", [["class", "mat-toolbar-row"], ["style", "background-color:#ffffff; height:5%;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["style", "color:#346166; font-weight: 300; font-size: 0.7em;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" Home / Work / ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentTitle; _ck(_v, 3, 0, currVal_0); }); }
function View_SidenavComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 42, "mat-toolbar", [["class", "mat-toolbar"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 1, 37, "mat-toolbar-row", [["class", "mat-toolbar-row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, [[1, 4]], 0, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "button", [["fxHide", ""], ["fxShow.lt-sm", "true"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["SERVER_TOKEN"]]], { "fxShow.lt-sm": [0, "fxShow.lt-sm"], fxHide: [1, "fxHide"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "img", [["class", "logo-nav"], ["src", "../assets/logo-MARIKIMI.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "span", [["class", "filler"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 11, "a", [["fxHide.lt-sm", "true"], ["fxShow", ""], ["mat-button", ""], ["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["SERVER_TOKEN"]]], { fxShow: [0, "fxShow"], "fxHide.lt-sm": [1, "fxHide.lt-sm"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassImpl"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Work"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 7, "a", [["fxHide.lt-sm", "true"], ["fxShow", ""], ["mat-button", ""], ["routerLink", "/about"], ["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = ((_co.home = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["SERVER_TOKEN"]]], { fxShow: [0, "fxShow"], "fxHide.lt-sm": [1, "fxHide.lt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 7, "a", [["fxHide.lt-sm", "true"], ["fxShow", ""], ["mat-button", ""], ["routerLink", "/contact"], ["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = ((_co.home = false) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, [[7, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["SERVER_TOKEN"]]], { fxShow: [0, "fxShow"], "fxHide.lt-sm": [1, "fxHide.lt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 1, 1, null, View_SidenavComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 45, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 44, "mat-drawer-container", [["class", "mat-drawer-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatDrawerContainer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatDrawerContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatDrawerContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ViewportRuler"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _drawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _content: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, 0, 36, "mat-drawer", [["class", "mat-drawer"], ["fxHide", ""], ["fxShow.lt-sm", "true"], ["tabIndex", "-1"]], [[40, "@transform", 0], [1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._animationStarted.next($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._animationEnd.next($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatDrawer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatDrawer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 3325952, [[8, 4], ["snav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatDrawer"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]], { mode: [0, "mode"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["SERVER_TOKEN"]]], { "fxShow.lt-sm": [0, "fxShow.lt-sm"], fxHide: [1, "fxHide"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 0, 33, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatNavList_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatNavList"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_11__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, 0, 9, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLink", "/work"], ["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, [[11, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 14, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Work"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, 0, 9, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLink", "/about"], ["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 671744, [[16, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 18, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 19, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, 0, 9, "a", [["class", "mat-list-item"], ["mat-list-item", ""], ["routerLink", "/contact"], ["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4], [2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatListItem_0"], _node_modules_angular_material_list_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatListItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 671744, [[21, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 1228800, null, 3, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatNavList"]], [2, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, { _lines: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 23, { _avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 24, { _icon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 2, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, 1, 3, "mat-drawer-content", [["class", "mat-drawer-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatDrawerContent_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatDrawerContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 1294336, [[9, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatDrawerContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatDrawerContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 16777216, null, 0, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = "true"; var currVal_5 = ""; _ck(_v, 7, 0, currVal_4, currVal_5); _ck(_v, 9, 0); var currVal_14 = (_co.home ? "active-link" : ""); _ck(_v, 15, 0, currVal_14); var currVal_15 = _ck(_v, 17, 0, "work"); _ck(_v, 16, 0, currVal_15); var currVal_16 = "active-link"; _ck(_v, 18, 0, currVal_16); var currVal_17 = ""; var currVal_18 = "true"; _ck(_v, 22, 0, currVal_17, currVal_18); var currVal_19 = (_co.home ? "active-link" : ""); _ck(_v, 23, 0, currVal_19); var currVal_26 = "/about"; _ck(_v, 26, 0, currVal_26); var currVal_27 = "active-link"; _ck(_v, 27, 0, currVal_27); var currVal_28 = ""; var currVal_29 = "true"; _ck(_v, 31, 0, currVal_28, currVal_29); var currVal_36 = "/contact"; _ck(_v, 34, 0, currVal_36); var currVal_37 = "active-link"; _ck(_v, 35, 0, currVal_37); var currVal_38 = ""; var currVal_39 = "true"; _ck(_v, 39, 0, currVal_38, currVal_39); var currVal_40 = _co.breadcrumbVisible; _ck(_v, 42, 0, currVal_40); _ck(_v, 45, 0); var currVal_48 = "over"; _ck(_v, 49, 0, currVal_48); var currVal_49 = "true"; var currVal_50 = ""; _ck(_v, 50, 0, currVal_49, currVal_50); var currVal_51 = "column"; _ck(_v, 53, 0, currVal_51); var currVal_52 = "center center"; _ck(_v, 54, 0, currVal_52); var currVal_57 = "/work"; _ck(_v, 56, 0, currVal_57); var currVal_58 = "active-link"; _ck(_v, 57, 0, currVal_58); var currVal_63 = "/about"; _ck(_v, 66, 0, currVal_63); var currVal_64 = "active-link"; _ck(_v, 67, 0, currVal_64); var currVal_69 = "/contact"; _ck(_v, 76, 0, currVal_69); var currVal_70 = "active-link"; _ck(_v, 77, 0, currVal_70); _ck(_v, 86, 0); _ck(_v, 88, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).inline; var currVal_7 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).color !== "warn")); _ck(_v, 8, 0, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).target; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).href; var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).tabIndex || 0)); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled.toString(); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations"); _ck(_v, 13, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).target; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).href; var currVal_22 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).tabIndex || 0)); var currVal_23 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled || null); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).disabled.toString(); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30)._animationMode === "NoopAnimations"); _ck(_v, 25, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).target; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).href; var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).tabIndex || 0)); var currVal_33 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled.toString(); var currVal_35 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationMode === "NoopAnimations"); _ck(_v, 33, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._backdropOverride; _ck(_v, 44, 0, currVal_41); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49)._animationState; var currVal_43 = null; var currVal_44 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).position === "end"); var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).mode === "over"); var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).mode === "push"); var currVal_47 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).mode === "side"); _ck(_v, 48, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).target; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).href; var currVal_55 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._icon); var currVal_56 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 60)._icon); _ck(_v, 55, 0, currVal_53, currVal_54, currVal_55, currVal_56); var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).target; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).href; var currVal_61 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70)._icon); var currVal_62 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70)._icon); _ck(_v, 65, 0, currVal_59, currVal_60, currVal_61, currVal_62); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).target; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).href; var currVal_67 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._icon); var currVal_68 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._avatar || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80)._icon); _ck(_v, 75, 0, currVal_65, currVal_66, currVal_67, currVal_68); var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86)._container._contentMargins.left; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86)._container._contentMargins.right; _ck(_v, 85, 0, currVal_71, currVal_72); }); }
function View_SidenavComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sidenav", [], null, null, null, View_SidenavComponent_0, RenderType_SidenavComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sidenav_component__WEBPACK_IMPORTED_MODULE_22__["SidenavComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _services_sidenav_service__WEBPACK_IMPORTED_MODULE_23__["SidenavService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SidenavComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-sidenav", _sidenav_component__WEBPACK_IMPORTED_MODULE_22__["SidenavComponent"], View_SidenavComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.scss.shim.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.scss.shim.ngstyle.js ***!
  \***************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #7DA7AC;\n  color: #fff;\n  letter-spacing: 0.29px; }\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  color: #000; }\n\n.filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto; }\n\n.logo-nav[_ngcontent-%COMP%] {\n  width: 80px; }\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWN0b3IvRG9jdW1lbnRzL3BvcnRmb2xpby9raW1pX3BvcnRmb2xpby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixZQUFXO0VBQ1gsdUJBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksWUFBVyxFQUNkOztBQUNEO0VBQ0ksZUFBYyxFQUNoQjs7QUFDRDtFQUNJLFlBQVUsRUFDYjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdEQTdBQztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yOXB4O1xufVxubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmZpbGxlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gfVxuIC5sb2dvLW5hdiB7XG4gICAgIHdpZHRoOjgwcHg7XG4gfVxuIG1hdC1kcmF3ZXIge1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


class SidenavComponent {
    constructor(route, router, sideNavService) {
        this.route = route;
        this.router = router;
        this.home = window.location.pathname == '/';
        this.breadcrumbVisible = false;
        this.currentTitle = '';
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.setBreadcrumb(val.url);
            }
        });
        sideNavService.change.subscribe(x => {
            this.currentTitle = x;
        });
    }
    setBreadcrumb(url) {
        this.breadcrumbVisible = url.indexOf('work/') >= 0 && url.indexOf('work/') + 6 <= url.length;
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/ti-python-adapter/ti-python-adapter.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/components/ti-python-adapter/ti-python-adapter.component.ngfactory.js ***!
  \***************************************************************************************/
/*! exports provided: RenderType_TIPythonAdapterComponent, View_TIPythonAdapterComponent_0, View_TIPythonAdapterComponent_Host_0, TIPythonAdapterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TIPythonAdapterComponent", function() { return RenderType_TIPythonAdapterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TIPythonAdapterComponent_0", function() { return View_TIPythonAdapterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TIPythonAdapterComponent_Host_0", function() { return View_TIPythonAdapterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPythonAdapterComponentNgFactory", function() { return TIPythonAdapterComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ti_python_adapter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ti-python-adapter.component */ "./src/app/components/ti-python-adapter/ti-python-adapter.component.ts");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_TIPythonAdapterComponent = [];
var RenderType_TIPythonAdapterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TIPythonAdapterComponent, data: {} });

function View_TIPythonAdapterComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_TIPythonAdapterComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_TIPythonAdapterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/ti83.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TIPythonAdapterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TIPythonAdapterComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90%"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 10, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 15, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 19, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 29, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 36, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 37, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 38, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 43, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 24, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 34, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 48, 0, currVal_20); }); }
function View_TIPythonAdapterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ti-python-adapter", [], null, null, null, View_TIPythonAdapterComponent_0, RenderType_TIPythonAdapterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _ti_python_adapter_component__WEBPACK_IMPORTED_MODULE_4__["TIPythonAdapterComponent"], [_services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TIPythonAdapterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ti-python-adapter", _ti_python_adapter_component__WEBPACK_IMPORTED_MODULE_4__["TIPythonAdapterComponent"], View_TIPythonAdapterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/ti-python-adapter/ti-python-adapter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ti-python-adapter/ti-python-adapter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TIPythonAdapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIPythonAdapterComponent", function() { return TIPythonAdapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class TIPythonAdapterComponent {
    constructor(navSer) {
        this.navSer = navSer;
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[1];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}


/***/ }),

/***/ "./src/app/components/tiinspire/tiinspire.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/tiinspire/tiinspire.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_TIInspireComponent, View_TIInspireComponent_0, View_TIInspireComponent_Host_0, TIInspireComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TIInspireComponent", function() { return RenderType_TIInspireComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TIInspireComponent_0", function() { return View_TIInspireComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TIInspireComponent_Host_0", function() { return View_TIInspireComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIInspireComponentNgFactory", function() { return TIInspireComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tiinspire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tiinspire */ "./src/app/components/tiinspire/tiinspire.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_TIInspireComponent = [];
var RenderType_TIInspireComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TIInspireComponent, data: {} });

function View_TIInspireComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_TIInspireComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_TIInspireComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 25, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 22, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/ti_inspire/1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "img", [["class", "project-description-img"], ["fxFlex", "30"], ["src", "../../assets/project-detail/ti_inspire/GIFS/1.gif"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "img", [["class", "project-description-img"], ["fxFlex", "30"], ["src", "../../assets/project-detail/ti_inspire/GIFS/2.gif"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "img", [["class", "project-description-img"], ["fxFlex", "30"], ["src", "../../assets/project-detail/ti_inspire/GIFS/3.gif"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"], ["style", "margin-top: 20px"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "img", [["class", "project-description-img"], ["fxFlex", "30"], ["src", "../../assets/project-detail/ti_inspire/GIFS/4.gif"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "img", [["class", "project-description-img"], ["fxFlex", "30"], ["src", "../../assets/project-detail/ti_inspire/GIFS/5.gif"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "img", [["class", "project-description-img"], ["fxFlex", "30"], ["src", "../../assets/project-detail/ti_inspire/GIFS/6.gif"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/ti_inspire/2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/ti_inspire/3.gif"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](44, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TIInspireComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](54, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TIInspireComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](68, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90%"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "30"; _ck(_v, 10, 0, currVal_5); var currVal_6 = "30"; _ck(_v, 12, 0, currVal_6); var currVal_7 = "30"; _ck(_v, 14, 0, currVal_7); var currVal_8 = "row"; _ck(_v, 16, 0, currVal_8); var currVal_9 = "space-around"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "30"; _ck(_v, 19, 0, currVal_10); var currVal_11 = "30"; _ck(_v, 21, 0, currVal_11); var currVal_12 = "30"; _ck(_v, 23, 0, currVal_12); var currVal_13 = "row"; _ck(_v, 27, 0, currVal_13); var currVal_14 = "space-around"; _ck(_v, 28, 0, currVal_14); var currVal_15 = "90%"; _ck(_v, 30, 0, currVal_15); var currVal_16 = "row"; var currVal_17 = "column"; _ck(_v, 34, 0, currVal_16, currVal_17); var currVal_18 = "space-around top"; _ck(_v, 35, 0, currVal_18); var currVal_19 = "column"; _ck(_v, 37, 0, currVal_19); var currVal_20 = "top"; _ck(_v, 38, 0, currVal_20); var currVal_21 = "70%"; _ck(_v, 39, 0, currVal_21); var currVal_23 = _co.selProject.challenges; _ck(_v, 49, 0, currVal_23); var currVal_25 = "column"; var currVal_26 = "column"; _ck(_v, 56, 0, currVal_25, currVal_26); var currVal_27 = "top"; _ck(_v, 57, 0, currVal_27); var currVal_28 = "30%"; _ck(_v, 58, 0, currVal_28); var currVal_29 = _co.selProject.tools; _ck(_v, 63, 0, currVal_29); }, function (_ck, _v) { var _co = _v.component; var currVal_22 = _co.selProject.role; _ck(_v, 44, 0, currVal_22); var currVal_24 = _co.selProject.purpose; _ck(_v, 54, 0, currVal_24); var currVal_30 = _co.selProject.date; _ck(_v, 68, 0, currVal_30); }); }
function View_TIInspireComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "tiinspire", [], null, null, null, View_TIInspireComponent_0, RenderType_TIInspireComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _tiinspire__WEBPACK_IMPORTED_MODULE_4__["TIInspireComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TIInspireComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("tiinspire", _tiinspire__WEBPACK_IMPORTED_MODULE_4__["TIInspireComponent"], View_TIInspireComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/tiinspire/tiinspire.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tiinspire/tiinspire.ts ***!
  \***************************************************/
/*! exports provided: TIInspireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIInspireComponent", function() { return TIInspireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class TIInspireComponent {
    ngAfterViewInit() {
    }
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[0];
    }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/components/tresdetres/tresdetres.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/components/tresdetres/tresdetres.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_TresDeTresComponent, View_TresDeTresComponent_0, View_TresDeTresComponent_Host_0, TresDeTresComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TresDeTresComponent", function() { return RenderType_TresDeTresComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TresDeTresComponent_0", function() { return View_TresDeTresComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TresDeTresComponent_Host_0", function() { return View_TresDeTresComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TresDeTresComponentNgFactory", function() { return TresDeTresComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _tresdetres_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tresdetres.component */ "./src/app/components/tresdetres/tresdetres.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_TresDeTresComponent = [];
var RenderType_TresDeTresComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TresDeTresComponent, data: {} });

function View_TresDeTresComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_TresDeTresComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_TresDeTresComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/3de3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TresDeTresComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TresDeTresComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90%"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 10, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 15, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 19, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 29, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 36, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 37, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 38, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 43, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 24, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 34, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 48, 0, currVal_20); }); }
function View_TresDeTresComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "tresdetres", [], null, null, null, View_TresDeTresComponent_0, RenderType_TresDeTresComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _tresdetres_component__WEBPACK_IMPORTED_MODULE_4__["TresDeTresComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TresDeTresComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("tresdetres", _tresdetres_component__WEBPACK_IMPORTED_MODULE_4__["TresDeTresComponent"], View_TresDeTresComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/tresdetres/tresdetres.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tresdetres/tresdetres.component.ts ***!
  \***************************************************************/
/*! exports provided: TresDeTresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TresDeTresComponent", function() { return TresDeTresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class TresDeTresComponent {
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[2];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}


/***/ }),

/***/ "./src/app/components/whittier/whittier.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/whittier/whittier.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_WhittierComponent, View_WhittierComponent_0, View_WhittierComponent_Host_0, WhittierComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WhittierComponent", function() { return RenderType_WhittierComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhittierComponent_0", function() { return View_WhittierComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WhittierComponent_Host_0", function() { return View_WhittierComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhittierComponentNgFactory", function() { return WhittierComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _whittier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./whittier.component */ "./src/app/components/whittier/whittier.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_WhittierComponent = [];
var RenderType_WhittierComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_WhittierComponent, data: {} });

function View_WhittierComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_WhittierComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "Tool"], ["class", "tool-icon"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) { var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "../../../assets/tool_logos/", _v.context.$implicit, ""); _ck(_v, 2, 0, currVal_1); }); }
function View_WhittierComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 2, "div", [["fxFlex", "90"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "project-description-img"], ["src", "../../assets/project-detail/whittier.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 42, "div", [["class", "project-description"], ["fxLayout", "row"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 39, "div", [["fxFlex", "90%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "p", [["class", "project-details-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Project Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 35, "div", [["class", "project-ditails-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "space-around top"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 18, "div", [["fxFlex", "70%"], ["fxLayout", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Challenge"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_WhittierComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Purpose"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "p", [["class", "project-details-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](34, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 13, "div", [["fxFlex", "30%"], ["fxLayout", "column"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "top"], ["style", "margin-left:50px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "p", [["class", "project-details-subtitle subtitle-margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Main Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_WhittierComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "p", [["class", "project-details-subtitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "p", [["class", "project-details-text"], ["style", "padding-bottom:50px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](48, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "space-around"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "90"; _ck(_v, 4, 0, currVal_2); var currVal_3 = "row"; _ck(_v, 7, 0, currVal_3); var currVal_4 = "space-around"; _ck(_v, 8, 0, currVal_4); var currVal_5 = "90%"; _ck(_v, 10, 0, currVal_5); var currVal_6 = "row"; var currVal_7 = "column"; _ck(_v, 14, 0, currVal_6, currVal_7); var currVal_8 = "space-around top"; _ck(_v, 15, 0, currVal_8); var currVal_9 = "column"; _ck(_v, 17, 0, currVal_9); var currVal_10 = "top"; _ck(_v, 18, 0, currVal_10); var currVal_11 = "70%"; _ck(_v, 19, 0, currVal_11); var currVal_13 = _co.selProject.challenges; _ck(_v, 29, 0, currVal_13); var currVal_15 = "column"; var currVal_16 = "column"; _ck(_v, 36, 0, currVal_15, currVal_16); var currVal_17 = "top"; _ck(_v, 37, 0, currVal_17); var currVal_18 = "30%"; _ck(_v, 38, 0, currVal_18); var currVal_19 = _co.selProject.tools; _ck(_v, 43, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.selProject.role; _ck(_v, 24, 0, currVal_12); var currVal_14 = _co.selProject.purpose; _ck(_v, 34, 0, currVal_14); var currVal_20 = _co.selProject.date; _ck(_v, 48, 0, currVal_20); }); }
function View_WhittierComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "whittier", [], null, null, null, View_WhittierComponent_0, RenderType_WhittierComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4308992, null, 0, _whittier_component__WEBPACK_IMPORTED_MODULE_4__["WhittierComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var WhittierComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("whittier", _whittier_component__WEBPACK_IMPORTED_MODULE_4__["WhittierComponent"], View_WhittierComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/whittier/whittier.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/whittier/whittier.component.ts ***!
  \***********************************************************/
/*! exports provided: WhittierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhittierComponent", function() { return WhittierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/kimisproject */ "./src/app/models/kimisproject.ts");


class WhittierComponent {
    constructor() {
        let availableWorks = [
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new src_app_models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.selProject = availableWorks[8];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}


/***/ }),

/***/ "./src/app/components/work/work.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/components/work/work.component.ngfactory.js ***!
  \*************************************************************/
/*! exports provided: RenderType_WorkComponent, View_WorkComponent_0, View_WorkComponent_Host_0, WorkComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WorkComponent", function() { return RenderType_WorkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WorkComponent_0", function() { return View_WorkComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WorkComponent_Host_0", function() { return View_WorkComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponentNgFactory", function() { return WorkComponentNgFactory; });
/* harmony import */ var _work_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work.component.scss.shim.ngstyle */ "./src/app/components/work/work.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./work.component */ "./src/app/components/work/work.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_WorkComponent = [_work_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_WorkComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_WorkComponent, data: {} });

function View_WorkComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "thumbnail-card"], ["fxFlex.gt-xs", "30"], ["fxFlex.xs", "90"], ["ngClass.xs", "xs-margin"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { "fxFlex.xs": [0, "fxFlex.xs"], "fxFlex.gt-xs": [1, "fxFlex.gt-xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], [8, null]], { "ngClass.xs": [0, "ngClass.xs"], klass: [1, "klass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 15, "div", [["ngClass.gt-xs", "view overlay"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], [8, null]], { "ngClass.gt-xs": [0, "ngClass.gt-xs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goToWorkComponent(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["class", "img-fluid img-thumbnail"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "mask flex-center rgba-black-strong"], ["fxHide.xs", "true"], ["fxShow", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goToWorkComponent(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]]], { fxShow: [0, "fxShow"], "fxHide.xs": [1, "fxHide.xs"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["> "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "p", [["class", "white-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "div", [["fxHide", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center"], ["fxShow.xs", "true"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], [2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"]]], { "fxShow.xs": [0, "fxShow.xs"], fxHide: [1, "fxHide"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "90"; var currVal_1 = "30"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "xs-margin"; var currVal_3 = "thumbnail-card"; _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_4 = "view overlay"; _ck(_v, 6, 0, currVal_4); var currVal_7 = ""; var currVal_8 = "true"; _ck(_v, 10, 0, currVal_7, currVal_8); var currVal_10 = "row"; _ck(_v, 15, 0, currVal_10); var currVal_11 = "center"; _ck(_v, 16, 0, currVal_11); var currVal_12 = "true"; var currVal_13 = ""; _ck(_v, 17, 0, currVal_12, currVal_13); }, function (_ck, _v) { var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.thumbnailUrl, ""); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.projectTitle, ""); _ck(_v, 8, 0, currVal_5, currVal_6); var currVal_9 = _v.context.$implicit.projectTitle; _ck(_v, 13, 0, currVal_9); var currVal_14 = _v.context.$implicit.projectTitle; _ck(_v, 19, 0, currVal_14); }); }
function View_WorkComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "ti-banner"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "portfolio-tittle-container"], ["fxFlex", "50%"], ["fxFlex.lt-sm", "60%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"], "fxFlex.lt-sm": [1, "fxFlex.lt-sm"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [["class", "porfolio_title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Design Portfolio"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 35, "div", [["class", "work-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 27, "div", [["class", "selected-work-men-container"], ["fxLayout", "row"], ["fxLayout.xs", "column"], ["fxLayoutAlign", "start center"], ["style", "width:100%"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"], "fxLayout.xs": [1, "fxLayout.xs"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [["fxFlex", "50%"], ["fxLayoutAlign", "center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxFlex: [0, "fxFlex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "h2", [["class", "banner-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Selected Works"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "div", [["class", "filler"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 18, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.filterProjects("all") !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 5, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.filterProjects("ui") !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["UI / UX"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.filterProjects("other") !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Other"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 4, "div", [["fxLayout", "row wrap"], ["fxLayoutAlign", "space-around"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayout: [0, "fxLayout"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"], [2, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["LayoutAlignStyleBuilder"]], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMarshaller"]], { fxLayoutAlign: [0, "fxLayoutAlign"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_WorkComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "row"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "start center"; _ck(_v, 2, 0, currVal_1); var currVal_2 = "50%"; var currVal_3 = "60%"; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = "row"; var currVal_5 = "column"; _ck(_v, 9, 0, currVal_4, currVal_5); var currVal_6 = "start center"; _ck(_v, 10, 0, currVal_6); var currVal_7 = "center"; _ck(_v, 12, 0, currVal_7); var currVal_8 = "50%"; _ck(_v, 13, 0, currVal_8); var currVal_13 = ((_co.selOption == "all") ? "active-link" : ""); _ck(_v, 20, 0, currVal_13); var currVal_14 = ((_co.selOption == "all") ? "active-link" : ""); _ck(_v, 22, 0, currVal_14); var currVal_19 = ((_co.selOption == "ui") ? "active-link" : ""); _ck(_v, 26, 0, currVal_19); var currVal_20 = ((_co.selOption == "ui") ? "active-link" : ""); _ck(_v, 28, 0, currVal_20); var currVal_25 = ((_co.selOption == "other") ? "active-link" : ""); _ck(_v, 32, 0, currVal_25); var currVal_26 = ((_co.selOption == "other") ? "active-link" : ""); _ck(_v, 34, 0, currVal_26); var currVal_27 = "row wrap"; _ck(_v, 37, 0, currVal_27); var currVal_28 = "space-around"; _ck(_v, 38, 0, currVal_28); var currVal_29 = _co.filteredWorks; _ck(_v, 40, 0, currVal_29); }, function (_ck, _v) { var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).tabIndex || 0)); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled || null); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).disabled.toString(); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._animationMode === "NoopAnimations"); _ck(_v, 18, 0, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).tabIndex || 0)); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled || null); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled.toString(); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 24, 0, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).tabIndex || 0)); var currVal_22 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled || null); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled.toString(); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._animationMode === "NoopAnimations"); _ck(_v, 30, 0, currVal_21, currVal_22, currVal_23, currVal_24); }); }
function View_WorkComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "work", [], null, null, null, View_WorkComponent_0, RenderType_WorkComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _services_sidenav_service__WEBPACK_IMPORTED_MODULE_13__["SidenavService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var WorkComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("work", _work_component__WEBPACK_IMPORTED_MODULE_11__["WorkComponent"], View_WorkComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/components/work/work.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/components/work/work.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".ti-banner[_ngcontent-%COMP%] {\n  height: 500px;\n  background-image: url('PortfolioImagebackground.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: right top; }\n\n.selected-work-men-container[_ngcontent-%COMP%] {\n  margin-top: 30px; }\n\n.filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto; }\n\n.thumbnail-card[_ngcontent-%COMP%] {\n  margin-top: 5%; }\n\n.xs-margin[_ngcontent-%COMP%] {\n  margin-top: 20%; }\n\n.portfolio-tittle-container[_ngcontent-%COMP%] {\n  height: 300px; }\n\n.porfolio_title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 3em;\n  color: #254E7E;\n  text-align: center;\n  line-height: 1.6; }\n\n.case-study[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white; }\n\n.star-icon[_ngcontent-%COMP%] {\n  color: #fffaa9; }\n\n.banner-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 2.3em;\n  color: #254E7E;\n  letter-spacing: 0;\n  text-align: center; }\n\n.active-link[_ngcontent-%COMP%] {\n  text-decoration: underline; }\n\n.overlay[_ngcontent-%COMP%] {\n  cursor: pointer; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWN0b3IvRG9jdW1lbnRzL3BvcnRmb2xpby9raW1pX3BvcnRmb2xpby9wb3J0Zm9saW8vc3JjL2FwcC9jb21wb25lbnRzL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixzREFBeUQ7RUFDekQsNkJBQTRCO0VBQzVCLHVCQUFzQjtFQUN0QiwrQkFBOEIsRUFDakM7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxlQUFjLEVBQ2hCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0csY0FBYSxFQUNoQjs7QUFDQTtFQUNJLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSx3QkFBdUI7RUFDdkIsYUFBWSxFQUNmOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDckI7O0FBQ0Y7RUFBYywyQkFBMEIsRUFBRzs7QUFDM0M7RUFDSSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpLWJhbm5lciB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvUG9ydGZvbGlvSW1hZ2ViYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgdG9wO1xufVxuLnNlbGVjdGVkLXdvcmstbWVuLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmZpbGxlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gfVxuXG4gLnRodW1ibmFpbC1jYXJkIHtcbiAgICAgbWFyZ2luLXRvcDogNSU7XG4gfVxuIC54cy1tYXJnaW4ge1xuICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gfVxuIC5wb3J0Zm9saW8tdGl0dGxlLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuIC5wb3Jmb2xpb190aXRsZSB7XG4gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICBjb2xvcjogIzI1NEU3RTtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBsaW5lLWhlaWdodDogMS42O1xuIH1cbiAuY2FzZS1zdHVkeSB7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICBjb2xvcjogd2hpdGU7XG4gfVxuIC5zdGFyLWljb24ge1xuICAgICBjb2xvcjogI2ZmZmFhOTtcbiB9XG4gLmJhbm5lci10aXRsZXtcbiAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgZm9udC1zaXplOiAyLjNlbTtcbiAgICAgY29sb3I6ICMyNTRFN0U7XG4gICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuLmFjdGl2ZS1saW5rIHt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XG4ub3ZlcmxheXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"];



/***/ }),

/***/ "./src/app/components/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/kimisproject */ "./src/app/models/kimisproject.ts");


class WorkComponent {
    constructor(router, sideNavService) {
        this.sideNavService = sideNavService;
        this.availableWorks = [];
        this.filteredWorks = [];
        this.router = router;
        this.selOption = 'all';
        this.availableWorks = [
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2018', '/work/tiinspire', 'TI-nspire CA II UI/UX Refresh', 'Text Editor', true, '../../assets/Thumbnail-portfolio_TInspire CAII.png', true, 'Heuristic evaluation, interaction design, visual design, and A/B testing.', [
                'Design for an embedded project with a low-resolution screen and limited spacing.',
                'Bring value to the product with the lowest possible effort.',
                'Make a big design impact with simple and small design purposes.'
            ], 'Professional project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_invision.png']),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2019', '/work/ti-python-adapter', 'TI-Python Adapter Text Editor', 'UI Refresh', true, '../../assets/Thumbnail-portfolio_TI Python Adapter.png', true, 'Visual design, prototyping, and font design.', ["Understand an embedded product technology limitations.",
                "Short time to execute the task.",
                "Identify python students learning curve."], 'Professional project', ['logo_fontlab.png', 'logo_illustrator.png', 'logo_sketch.png']),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('December, 2016', '/work/3de3', 'Corruption tracking web system', 'Patrimony man', false, '../../assets/Thumbnail-portfolio_3DE3.png', true, 'UX information architecture, heuristic evaluation, interaction and visual design.', ["Manage a big amount of data and organize it.",
                "Reduce user pain points during the transition from a pencil-paper process to a digital process."], 'Professional project', ["logo_sketch.png", "logo_illustrator.png", "logo_photoshop.png"]),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('January, 2017', '/work/holiday', 'Holiday Inn Smart Building', 'Holiday Inn Smart Building', false, '../../assets/Thumbnail-portfolio_Holiday Inn Smart Building.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ["Find a friendly way to display a big amount of numbers and system status.",
                ,
                "Explore new interactive ways to compare data.",
                ,
                "Make the system’s animations more visible and evident."], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png']),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('October, 2018', '/work/iot', 'IoT Energy Meter', 'IoT Energy Meter', false, '../../assets/Thumbnail-portfolio_IoT Enery Meeter.png', true, 'Conceptual design, UX research, heuristic evaluation, UX information architecture, prototyping, interaction design, visual design, and front end.', ["Understand the energy metrics in the industry.",
                "Collaborate with electrical engineers to implement circuits designing IoT devices.",
                "Organize the time and tasks to deliver to hit the deadline."], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_dglux.png']),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('August, 2017', '/work/energy-management', 'Energy Management Dashboard', 'Energy Management Dashboard', false, '../../assets/Thumbnail-portfolio_Energy Dashboard Design.png', true, 'UX information architecture, interaction design, and visual design.', ["Transform the raw data collected from sensors into useful metrics."], 'Professional project', ['logo_illustrator.png', 'logo_photoshop.png', 'logo_gimp.png']),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('March, 2014', '/work/beauty-tree', 'Beauty Tree', 'Beauty Tree', false, '../../assets/Thumbnail-portfolio_BeautySalonTreeCart.png', false, 'Conceptual design, UX research, and prototyping.', ['N/A'], 'Academic project', ['logo_illustrator.png', 'logo_solidworks.png', 'logo_photoshop.png']),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('June, 2017', '/work/guawapp', 'Guawapp', 'Guawapp', false, '../../assets/Thumbnail-portfolio_Guawapp.png', true, 'Heuristic evaluation, visual design, and prototyping.', ['Coordinate application development with software engineers.'], 'Academic project', ['logo_sketch.png', 'logo_illustrator.png', 'logo_xcode.png']),
            new _models_kimisproject__WEBPACK_IMPORTED_MODULE_1__["KimisProject"]('Sep, 2015', '/work/whittier', 'Whittier College Smart Building', 'Whittier College Smart Building', false, '../../assets/Thumbnail-portfolio_Whittier.png', true, 'Motion design, UX information architecture, visual design, and 3D design.', ['Translate technical architecture and air conditioning system layouts into a friendly representation.'], 'Professional project', ['logo_illustrator.png', 'logo_cinema4d.png', 'logo_revit.png'])
        ];
        this.filteredWorks = this.availableWorks;
    }
    ngOnInit() {
    }
    goToWorkComponent(project) {
        this.sideNavService.setMenuOption(project.projectTitle);
        this.sideNavService.setProject(project);
        localStorage.setItem(project.url, JSON.stringify(project));
        this.router.navigate([project.url]);
    }
    filterProjects(option) {
        this.selOption = option;
        if (option == 'all') {
            this.filteredWorks = this.availableWorks;
        }
        else if (option == 'ui') {
            this.filteredWorks = this.availableWorks.filter(x => x.isUIUX);
        }
        else if (option == 'other') {
            this.filteredWorks = this.availableWorks.filter(x => x.isUIUX == false);
        }
    }
}


/***/ }),

/***/ "./src/app/models/kimisproject.ts":
/*!****************************************!*\
  !*** ./src/app/models/kimisproject.ts ***!
  \****************************************/
/*! exports provided: KimisProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KimisProject", function() { return KimisProject; });
class KimisProject {
    constructor(date, url, projectTitle, projectDescription, isCaseStudy, thumbnailUrl, isUIUX, role, challenges, purpose, tools) {
        this.challenges = [];
        this.tools = [];
        this.date = '';
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
        this.isCaseStudy = isCaseStudy;
        this.thumbnailUrl = thumbnailUrl;
        this.isUIUX = isUIUX;
        this.url = url;
        this.role = role;
        this.challenges = challenges;
        this.purpose = purpose;
        this.tools = tools;
        this.date = date;
    }
}


/***/ }),

/***/ "./src/app/services/sidenav.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidenav.service.ts ***!
  \*********************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class SidenavService {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedProjectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setMenuOption(option) {
        this.selectedMenuOption = option;
        this.change.emit(this.selectedMenuOption);
    }
    setProject(project) {
        this.selProject = project;
        this.selectedProjectChange.emit(this.selProject);
    }
}
SidenavService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function SidenavService_Factory() { return new SidenavService(); }, token: SidenavService, providedIn: "root" });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    workName: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hector/Documents/portfolio/kimi_portfolio/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map