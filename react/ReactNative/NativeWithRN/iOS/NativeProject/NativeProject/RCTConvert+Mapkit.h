//
//  RCTConvert+Mapkit.h
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/23.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end
