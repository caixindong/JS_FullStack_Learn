//
//  RCTConvert+Mapkit.m
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/23.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import "RCTConvert+Mapkit.h"

@implementation RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json {
    json = [self NSDictionary:json];
    return (MKCoordinateSpan) {
        [self CLLocationDegrees:json[@"latitudeDelta"]],
        [self CLLocationDegrees:json[@"longitudeDelta"]]
    };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json {
    return (MKCoordinateRegion) {
        [self CLLocationCoordinate2D:json],
        [self MKCoordinateSpan:json]
    };
}

@end
