/**
 * Example JavaScript code for demonstration purposes
 * This file showcases various JavaScript features and patterns
 */

// Class definition with constructor and methods
class DataProcessor {
    constructor(name) {
        this.name = name;
        this.data = [];
    }

    // Method to add data with validation
    addData(item) {
        if (item && typeof item === 'object') {
            this.data.push({
                ...item,
                timestamp: new Date().toISOString(),
                id: this.generateId()
            });
            return true;
        }
        throw new Error('Invalid data item provided');
    }

    // Private method for ID generation
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    // Async method for data processing
    async processData() {
        try {
            const results = await Promise.all(
                this.data.map(async (item) => {
                    // Simulate async processing
                    await this.delay(Math.random() * 100);
                    return {
                        ...item,
                        processed: true,
                        result: this.calculateResult(item)
                    };
                })
            );
            return results;
        } catch (error) {
            console.error('Processing failed:', error);
            throw error;
        }
    }

    // Helper method with mathematical operations
    calculateResult(item) {
        const { value = 0, multiplier = 1 } = item;
        return Math.round(value * multiplier * 100) / 100;
    }

    // Utility method for delays
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Getter for data summary
    get summary() {
        return {
            name: this.name,
            totalItems: this.data.length,
            averageValue: this.getAverageValue()
        };
    }

    // Method using array methods and functional programming
    getAverageValue() {
        if (this.data.length === 0) return 0;
        
        const sum = this.data
            .filter(item => typeof item.value === 'number')
            .reduce((acc, item) => acc + item.value, 0);
        
        return Math.round((sum / this.data.length) * 100) / 100;
    }
}

// Usage example with error handling
async function main() {
    const processor = new DataProcessor('Sample Processor');
    
    try {
        // Add sample data
        processor.addData({ value: 42.5, multiplier: 1.2 });
        processor.addData({ value: 33.8, multiplier: 0.9 });
        processor.addData({ value: 56.1, multiplier: 1.5 });
        
        console.log('Data summary:', processor.summary);
        
        // Process data asynchronously
        const results = await processor.processData();
        console.log('Processing completed:', results);
        
    } catch (error) {
        console.error('Application error:', error.message);
    }
}

// Export for module usage
export { DataProcessor };

// Run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
    main();
}
