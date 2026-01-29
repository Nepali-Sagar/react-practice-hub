# React useState - Revision Summary

## Key Concepts Covered

### 1. **ClickCounter** ✨
**Important Points:**
- Using `useState` to manage numeric state
- **Increment/Decrement with prev pattern:** `setCount(prev => prev + 1)`
- **Conditional updates:** Only decrement if count > 0
- **State reset:** `setCount(0)` to reset counter

**Key Learning:** Using previous state pattern (`prev =>`) prevents state update bugs

---

### 2. **ToggleButton** 🔄
**Important Points:**
- Boolean state management: `useState(false)`
- **Toggle pattern:** `setSwitch((pre) => !pre)` - flips boolean
- Conditional rendering in JSX: `{switchBtn ? "ON" : "OFF"}`

**Key Learning:** Boolean state is useful for simple show/hide or on/off features

---

### 3. **TextMirror** 📝
**Important Points:**
- **String state management:** `useState('')`
- Real-time input synchronization using `onChange`
- **Controlled component:** Input value controlled by state

**Key Learning:** Two-way binding between input and display using state

---

### 4. **CharacterCounter** 📊
**Important Points:**
- String state with `.length` property
- Counting characters dynamically
- **Simple onChange handler:** Updates state on every keystroke

**Key Learning:** Can derive values from state (like length) without separate state

---

### 5. **TextVisibility** 👁️
**Important Points:**
- Boolean state for visibility toggle
- **Conditional rendering:** Show/hide content based on boolean state
- `{content ? 'Hi' : ''}` - renders empty string when false

**Key Learning:** Boolean state controls what renders in JSX

---

### 6. **LoginToggle** 🔐
**Important Points:**
- Boolean state for login status
- Dual conditional display: button text + status message
- **Pattern:** `{log ? 'Login' : 'Logout'}` and `{log ? 'User logged in' : 'User logged out'}`

**Key Learning:** Single boolean state can control multiple UI elements

---

### 7. **AddItems** ➕
**Important Points:**
- **Array state management:** `useState([])`
- **Spread operator for arrays:** `[...items, text]` - adds new item
- **Filter method:** `items.filter((_,i) => i !== index)` - removes item
- **Array mapping:** `.map()` to render list items

**Key Learning:** Immutable array updates using spread operator

---

## 🎯 Critical Patterns to Remember

### Pattern 1: Updating State with Previous Value
```javascript
setCount(prev => prev + 1)  // ✅ CORRECT - uses previous state
setCount(count + 1)         // ❌ RISKY - may not work as expected
```

### Pattern 2: Array Immutability
```javascript
// ✅ Correct ways:
setItems([...items, newItem])           // Add
setItems(items.filter(item => condition)) // Remove
setItems(items.map(item => update))     // Modify

// ❌ Wrong:
items.push(newItem)  // Direct mutation
```

### Pattern 3: Controlled Components
```javascript
<input 
  value={state}                    // State controls value
  onChange={(e) => setState(e.target.value)}  // Update state on change
/>
```

### Pattern 4: Conditional Rendering
```javascript
{boolean ? <Show /> : <Hide />}    // Ternary operator
{boolean && <OnlyIfTrue />}        // Logical AND
```

---

## ⚠️ Issues Found in Code

1. **LoginToggle.jsx - Bug:** `loginStatus()` uses parameter `e` but receives no parameter
   - Should be: `setLog(log => !log)` or `setLog(!log)` :DONE

2. **AddItems.jsx - Logic Issue:** `itemAdd()` sets state twice which causes issue
   - First line: `setItems([text])` creates array with only new text
   - Second line: `setItems([...items, text])` adds to old state
   - Fix: Only use the second line OR correct the logic : DONE

---

## 📚 useState Syntax

```javascript
const [state, setState] = useState(initialValue)
```

- **state:** Current value
- **setState:** Function to update state
- **initialValue:** Starting value (string, number, boolean, array, object)

---

## 🚀 Best Practices

✅ Always use previous state pattern for calculations: `prev => ...`  
✅ Keep state as simple as possible  
✅ Use boolean state for toggles/visibility  
✅ Use arrays for lists with `.map()`, `.filter()`  
✅ Never mutate state directly  
✅ Clear naming: `[isVisible, setIsVisible]`, `[count, setCount]`
