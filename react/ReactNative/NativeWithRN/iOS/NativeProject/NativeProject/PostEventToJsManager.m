//
//  PostEventToJsManager.m
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/22.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import "PostEventToJsManager.h"
#import <React/RCTLog.h>

NSString *const kEventEmitterManagerEvent  = @"EventEmitterManagerEvent";

@implementation PostEventToJsManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(postNotificationEvent:(NSString *)name) {
    RCTLogInfo(@"postNotificationEvent->:%@",name);
    [self sendEventWithName:kEventEmitterManagerEvent body:name];
}

- (NSDictionary<NSString *,id> *)constantsToExport {
    return @{@"EventEmitterManagerEvent": kEventEmitterManagerEvent};
}

//给Javascript发送事件,继承RCTEventEmitter,实现suppportEvents方法并调用self sendEventWithName:
- (NSArray<NSString *> *)supportedEvents {
    return @[@"EventEmitterManagerEvent"];
}

// 在添加第一个监听函数时触发
-(void)startObserving {
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    // Remove upstream listeners, stop unnecessary background tasks
}

@end
