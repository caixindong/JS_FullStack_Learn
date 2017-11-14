//
//  ViewController.m
//  NativeProject
//
//  Created by 蔡欣东 on 2017/10/12.
//  Copyright © 2017年 蔡欣东. All rights reserved.
//

#import "ViewController.h"
#import "RNViewViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (IBAction)click:(id)sender {
    RNViewViewController *vc = [[RNViewViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
