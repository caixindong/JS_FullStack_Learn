//
//  RNTMapManager.m
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/23.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>
#import "RCTConvert+Mapkit.h"
#import "RNTMapView.h"


@interface RNTMapManager()<MKMapViewDelegate>

@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

//导出属性
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RNTMapView)
{
    [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)

- (UIView *)view {
    RNTMapView *map = [[RNTMapView alloc] init];
    map.delegate = self;
    return map;
}

- (void)mapView:(RNTMapView *)mapView regionDidChangeAnimated:(BOOL)animated {
    if (!mapView.onRegionChange) {
        return;
    }
    
    MKCoordinateRegion region = mapView.region;
    mapView.onRegionChange(@{
                             @"region": @{
                                     @"latitude": @(region.center.latitude),
                                     @"longitude": @(region.center.longitude),
                                     @"latitudeDelta": @(region.span.latitudeDelta),
                                     @"longitudeDelta": @(region.span.longitudeDelta),
                                     }
                             });
    
}

@end

