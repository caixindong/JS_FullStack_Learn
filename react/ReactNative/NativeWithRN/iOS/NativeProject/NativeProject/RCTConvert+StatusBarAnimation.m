//
//  RCTConvert+StatusBarAnimation.m
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/22.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import "RCTConvert+StatusBarAnimation.h"

@implementation RCTConvert (StatusBarAnimation)

RCT_ENUM_CONVERTER(UIStatusBarAnimation, (@{ @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),
                                             @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),
                                             @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide)}), UIStatusBarAnimationNone, integerValue);

@end
