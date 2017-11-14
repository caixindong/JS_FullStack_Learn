//
//  RNTMapView.h
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/23.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end
