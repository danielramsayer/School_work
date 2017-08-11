#This is a unit test file
import test1 as t1
import unittest, string1

class TestDefs(unittest.TestCase):
    def test_website_check(self):
        self.assertEquals(t1.website_check('http://www.google.com'), 'Should produce: 200')
    def website_test_invalid(self):
        self.assertEquals(t1.website_check('www.google.com'), 'You need to include http://www')

if __name__ == '__main__':
    unittest.main(exit=false)
