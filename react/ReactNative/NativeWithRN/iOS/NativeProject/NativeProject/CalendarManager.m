//
//  CalendarManager.m
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/16.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager{
    bool hasListeners;
}

//methodQueue会被你模块里的所有方法共享
- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

//导出一些常量给JS端使用
- (NSDictionary<NSString *,id> *)constantsToExport {
    return @{@"firstDayOfTheWeek":@"Monday",
             @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),
             @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),
             @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide)};
}

//这个宏也可以添加一个参数用来指定在Javascript中访问这个模块的名字。如果你不指定，默认就会使用这个Objective-C类的名字
RCT_EXPORT_MODULE();
//必须明确的声明要给Javascript导出的方法，否则React Native不会导出任何方法。声明通过RCT_EXPORT_METHOD()宏来实现：
//RCT_EXPORT_METHOD(addEvent:(NSString*)name location:(NSString*)location date:(NSDate*) date) {
//    RCTLogInfo(@"Pretending to create an event %@ at %@ in %@", name, location,date);
//}
RCT_EXPORT_METHOD(addEvent:(NSString*)name details:(NSDictionary*)details) {
    NSString *location = [RCTConvert NSString:details[@"location"]];
    NSDate *time = [RCTConvert NSDate:details[@"time"]];
    //React Native在一个独立的串行GCD队列中调用原生模块的方法,但有些原生API只有在主线程才能使用

//    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"From React-Native" message:[NSString stringWithFormat:@"locations : [%@], time : [%@]",location,time] delegate:nil cancelButtonTitle:@"YES" otherButtonTitles:nil, nil];
//        [alert show];

    NSLog(@"locations is %@, time is %@",location,time);
}

//RCTResponseSenderBlock只接受一个参数——传递给JavaScript回调函数的参数数组。在上面这个例子里我们用Node.js的常用习惯：第一个参数是一个错误对象（没有发生错误的时候为null），而剩下的部分是函数的返回值
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callBack) {
    NSArray *events = @[@"Shopping", @"parking"];
    callBack(@[[NSNull null], events]);
}

RCT_EXPORT_METHOD(updateStatusBarAnimation:(UIStatusBarAnimation)animation
                  completion:(RCTResponseSenderBlock)callback) {

}

RCT_REMAP_METHOD(findEvents,resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    NSArray *events = @[@"Shopping", @"parking"];
    if (events) {
        resolve(events);
    } else {
        NSError *error = [NSError errorWithDomain:@"i am error" code:400 userInfo:nil];
        reject(@"400", @"i am error", error);
    }
}



@end
