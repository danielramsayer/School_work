% variables
var float: R; %q repayment
var float: P; %principle 
var 0.0 .. 2.0: I; %interest
% Quarterly variables
var float: B1; %first payment
var float: B2; %second payment
var float: B3; %third payment
var float: B4; %forth payment

constraint B1 = P * (1.0 + I) - R;
constraint B2 = B1 * (1.0 + I) - R;
constraint B3 = B2 * (1.0 + I) - R;
constraint B4 = B3 * (1.0 + I) - R;

solve satisfy;

